import { FC, useEffect, useState } from 'react';

import styles from '../../styles/Home.module.css';

import { Payload } from '@/pages/code';

type WrittenPromptProps = {
  setCurrPrompt: (prompt: string) => void;
  setPayload: (payload: Payload) => void;
  payload: Payload;
  setIsWritten: (bool: boolean) => void;
};
const WrittenPrompt: FC<WrittenPromptProps> = ({
  setCurrPrompt,
  setPayload,
  payload,
  setIsWritten,
}) => {
  const [text, setText] = useState(
    payload.text == undefined ? '' : payload.text
  );
  useEffect(() => {
    setPayload({ template: 'Free Writing' });
  }, [setPayload]);
  return (
    <div className={styles['code-page-storage-prompt']}>
      <textarea
        placeholder='Start writing'
        value={text}
        onChange={(event) => setText(event.target.value)}
        className={styles['code-page-written-prompt']}
      ></textarea>
      <div className={styles['code-page-written-prompt-button-container']}>
        <button
          onClick={() => setIsWritten(false)}
          className={styles['code-page-prompt-button']}
        >
          Back
        </button>
        <button
          onClick={() => {
            if (text == '') {
              alert('Invalid Input: Text must be non-empty');
              return;
            } else if (!(text.includes('vesting') || text.includes('escrow'))) {
              alert('Prompt could not be interpreted');
              return;
            }
            setPayload((prev) => ({ ...prev, text }));
            setCurrPrompt('summary');
          }}
          className={styles['code-page-prompt-button']}
        >
          Generate
        </button>
      </div>
    </div>
  );
};
export default WrittenPrompt;
