import { FC, useState } from 'react';

import styles from '../../styles/Home.module.css';

const StoragePromptOne: FC = ({ setPart, setPayload }) => {
  const [name, setName] = useState('');
  return (
    <div className={styles['code-page-storage-prompt']}>
      <div>Please provide a name for your database:</div>
      <input
        onChange={(event) => setName(event.target.value)}
        className={styles['code-page-prompt-input']}
        value={name}
      />
      <button
        onClick={() => {
          if (name == '') {
            alert('Invaid Input: Name of database cannot be empty');
            return;
          }
          setPart(false);
          setPayload((prev) => ({ ...prev, name }));
        }}
        className={styles['code-page-prompt-proceed-button']}
      >
        Next
      </button>
    </div>
  );
};
export default StoragePromptOne;
