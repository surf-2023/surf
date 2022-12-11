import { FC, useState } from 'react';

import styles from '../../styles/Home.module.css';

const StoragePromptOne: FC = ({
  setPart,
  setPayload,
  setCurrPrompt,
  payload,
}) => {
  const [name, setName] = useState(
    payload.name == undefined ? '' : payload.name
  );
  return (
    <div className={styles['code-page-storage-prompt']}>
      <div>Please provide a name for your database:</div>
      <input
        onChange={(event) => setName(event.target.value)}
        className={styles['code-page-prompt-input']}
        value={name}
      />
      <div className={styles['code-page-prompt-button-container']}>
        <button
          onClick={() => setCurrPrompt('initial')}
          className={styles['code-page-prompt-proceed-button']}
        >
          Back
        </button>

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
    </div>
  );
};
export default StoragePromptOne;
