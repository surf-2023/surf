import { NextApiRequest, NextApiResponse } from 'next';

export default async function hello(req: NextApiRequest, res: NextApiResponse) {
  const r = await fetch(
    'https://raw.githubusercontent.com/ysjprojects/sbl-surf-templates/main/lib-vesting.rs.txt'
  );
  const contents = await r.text();

  res.status(200).json({ code: contents });
}
