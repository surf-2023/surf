import { NextApiRequest, NextApiResponse } from 'next';

export default async function hello(req: NextApiRequest, res: NextApiResponse) {
  const { dbname, attrnames, attrtypes } = req.query;
  const DBNAME = dbname as string;
  const NAMES = (attrnames as string).split(',');
  const TYPES = (attrtypes as string).split(',');
  const PRIMARY_KEY = NAMES[0];
  const SPACE_CONSTRAINTS = getSpaceConstraints(NAMES, TYPES);
  const ATTRIBUTES_AS_ARGS = NAMES.join(', ');
  const ATTRIBUTES_AS_ARGS_WITHOUT_PRIMARY_KEY = NAMES.slice(1).join(', ');

  const outputarray = await transformCode(
    DBNAME,
    ATTRIBUTES_AS_ARGS,
    PRIMARY_KEY,
    SPACE_CONSTRAINTS,
    ATTRIBUTES_AS_ARGS_WITHOUT_PRIMARY_KEY,
    NAMES,
    TYPES
  );
  const outputcontent = outputarray.join('\n');

  res.status(200).json({ code: outputcontent });
}

const uint_sizes: { [key: string]: number } = { u8: 1, u16: 2, u32: 4, u64: 8 };

const getSpaceConstraints = (names: string[], types: string[]) => {
  const strings = [];
  let space = 8;
  for (let i = 0; i < names.length; i++) {
    if (types[i] === 'String') {
      space += 4;
      strings.push(names[i]);
    } else {
      if (types[i] in uint_sizes) {
        space += uint_sizes[types[i]];
      }
    }
  }
  let strings_size = '';
  for (const s of strings) {
    strings_size += ` + ${s}.len()`;
  }
  return space + strings_size;
};

const get_attributes_with_type_lines = (
  names: string[],
  types: string[],
  withprimary: boolean,
  indentation: number
) => {
  const lines = [];
  const STARTINDEX = withprimary ? 0 : 1;
  for (let i = STARTINDEX; i < names.length - 1; i++) {
    lines.push('  '.repeat(indentation) + names[i] + ': ' + types[i] + ',');
  }

  lines.push(
    '  '.repeat(indentation) +
      names[names.length - 1] +
      ': ' +
      types[names.length - 1]
  );

  return lines;
};

const get_attributes_with_type_in_struct_lines = (
  names: string[],
  types: string[],
  indentation: number
) => {
  const lines = [];
  for (let i = 0; i < names.length - 1; i++) {
    lines.push(
      '  '.repeat(indentation) + 'pub ' + names[i] + ': ' + types[i] + ','
    );
  }

  lines.push(
    '  '.repeat(indentation) +
      'pub ' +
      names[names.length - 1] +
      ': ' +
      types[names.length - 1]
  );

  return lines;
};

const get_attributes_assignment_lines = (
  names: string[],
  indentation: number
) => {
  const lines = [];

  for (let i = 0; i < names.length - 1; i++) {
    lines.push('  '.repeat(indentation) + names[i] + ': ' + names[i] + ',');
  }
  lines.push(
    '  '.repeat(indentation) +
      names[names.length - 1] +
      ': ' +
      names[names.length - 1]
  );
  return lines;
};

const get_set_pda_attributes_lines = (
  names: string[],
  withprimary: boolean,
  indentation: number
) => {
  const lines = [];

  const STARTINDEX = withprimary ? 0 : 1;
  for (let i = STARTINDEX; i < names.length; i++) {
    lines.push(
      '  '.repeat(indentation) +
        `ctx.accounts.pda_account.${names[i]} = ${names[i]};`
    );
  }

  return lines;
};

const transformCode = async (
  dbname: string,
  attributes_as_args: string,
  primary_key: string,
  space_constraints: string,
  attributes_as_args_without_primary_key: string,
  names: string[],
  types: string[]
) => {
  const res = await fetch(
    'https://raw.githubusercontent.com/ysjprojects/sbl-surf-templates/main/lib-simple-storage.rs.txt'
  );
  const contents = await res.text();
  const linesarray = contents.split('\n');
  const newcode = [];
  for (const line of linesarray) {
    if (line.includes('</>')) {
      const instruction = line.trim().slice(3).split(',');
      const indentation = Number(instruction[0]);
      const tag = instruction[1];
      let lines = [];
      switch (tag) {
        case 'ATTRIBUTES_WITH_TYPE':
          lines = get_attributes_with_type_lines(
            names,
            types,
            true,
            indentation
          );
          break;
        case 'ATTRIBUTES_WITH_TYPE_WITHOUT_PRIMARY_KEY':
          lines = get_attributes_with_type_lines(
            names,
            types,
            false,
            indentation
          );
          break;
        case 'ATTRIBUTES_WITH_TYPE_IN_STRUCT':
          lines = get_attributes_with_type_in_struct_lines(
            names,
            types,
            indentation
          );
          break;
        case 'ATTRIBUTES_ASSIGNMENT':
          lines = get_attributes_assignment_lines(names, indentation);
          break;
        case 'SET_PDA_ATTRIBUTES':
          lines = get_set_pda_attributes_lines(names, true, indentation);
          break;
        case 'SET_PDA_ATTRIBUTES_WITHOUT_PRIMARY_KEY':
          lines = get_set_pda_attributes_lines(names, false, indentation);
          break;
        default:
          lines = [line];
      }
      for (const l of lines) {
        newcode.push(l);
      }
    } else {
      let outline = line;
      if (line.includes('<DBNAME>')) {
        outline = outline.replaceAll('<DBNAME>', dbname);
      }

      if (line.includes('<ATTRIBUTES_AS_ARGS>')) {
        outline = outline.replaceAll(
          '<ATTRIBUTES_AS_ARGS>',
          attributes_as_args
        );
      }
      if (line.includes('<PRIMARY_KEY>')) {
        outline = outline.replaceAll('<PRIMARY_KEY>', primary_key);
      }
      if (line.includes('<SPACE_CONSTRAINTS>')) {
        outline = outline.replaceAll('<SPACE_CONSTRAINTS>', space_constraints);
      }
      if (line.includes('<ATTRIBUTES_AS_ARGS_WITHOUT_PRIMARY_KEY>')) {
        outline = outline.replaceAll(
          '<ATTRIBUTES_AS_ARGS_WITHOUT_PRIMARY_KEY>',
          attributes_as_args_without_primary_key
        );
      }
      newcode.push(outline);
    }
  }
  return newcode;
};
