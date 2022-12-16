import { FC, useState } from 'react';

import styles from '../../styles/Home.module.css';

import { Payload } from '@/pages/code';

import StoragePromptTwoRow from './StoragePromptTwoRow';

export type Attribute = {
  name: string;
  type: string;
};

type StoragePromptTwoProps = {
  setCurrPrompt: (prompt: string) => void;
  setPayload: (payload: Payload) => void;
  setPart: (bool: boolean) => void;
  payload: Payload;
};
const StoragePromptTwo: FC<StoragePromptTwoProps> = ({
  setCurrPrompt,
  setPayload,
  setPart,
  payload,
}) => {
  const [attributes, setAttributes] = useState<Attribute[]>(
    payload.attributes == undefined
      ? [
          { name: '', type: 'u8' },
          { name: '', type: 'u8' },
        ]
      : payload.attributes
  );
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleInputChange = (event: any, index: number, variable: string) => {
    const newValue = event.target.value;
    if (variable == 'name' && newValue != '') {
      if (newValue.length > 32) {
        alert('Invalid Input: Attribute name must not exceed length of 32');
        return;
      }
      const regex = new RegExp('^[a-z][a-z0-9_]*$');
      if (!regex.test(newValue)) {
        alert(
          'Invalid Input: Attribute name must be alphanumeric or underscore and the first character must be an alphabet'
        );
        return;
      }
    }
    const prev = [...attributes];
    prev[index] =
      variable == 'name'
        ? { ...prev[index], name: newValue }
        : { ...prev[index], type: newValue };
    setAttributes(prev);
  };
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDelete = (event: any, index: number) => {
    const prev = [...attributes];
    prev.splice(index, 1);
    setAttributes(prev);
  };
  return (
    <div className={styles['code-page-storage-prompt']}>
      <div>Please provide attributes for your database:</div>
      <div className={styles['code-page-storage-heading']}>
        <div>Name</div>
        <div>Type</div>
      </div>
      {attributes.map((attr, index) => (
        <StoragePromptTwoRow
          isPrimary={index == 0}
          index={index}
          key={index}
          attributes={attributes}
          handleInputChange={handleInputChange}
          handleDelete={handleDelete}
        />
      ))}
      {attributes.length < 5 && (
        <button
          className={styles['code-page-prompt-button']}
          onClick={() => {
            setAttributes([...attributes, { name: '', type: 'u8' }]);
          }}
        >
          Add Attribute
        </button>
      )}
      <div className={styles['code-page-prompt-button-container']}>
        <button
          onClick={() => setPart(true)}
          className={styles['code-page-prompt-proceed-button']}
        >
          Back
        </button>
        <button
          onClick={() => {
            const allNonEmpty = attributes.reduce(
              (prev, curr) => prev && curr.name != '',
              true
            );
            if (!allNonEmpty) {
              alert('Invalid Input: Attribute names cannot be empty');
              return;
            }
            setCurrPrompt('summary');
            setPayload((prev) => ({ ...prev, attributes }));
          }}
          className={styles['code-page-prompt-proceed-button']}
        >
          Generate
        </button>
      </div>
    </div>
  );
};
export default StoragePromptTwo;
