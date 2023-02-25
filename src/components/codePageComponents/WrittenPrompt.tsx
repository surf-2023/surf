import { FC, useEffect, useState } from 'react';

import styles from '../../styles/Home.module.css';

import { ESCROW_KEYWORDS, VESTING_KEYWORDS } from '@/constant/data';
const WrittenPrompt: FC = ({
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
            if (text.length == '') {
              alert('Invalid Input: Text must be non-empty');
              return;
            } else if (
              !(
                ESCROW_KEYWORDS.some((v) => text.includes(v)) ||
                VESTING_KEYWORDS.some((v) => text.includes(v))
              )
            ) {
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
