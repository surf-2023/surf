import { FC, useEffect } from 'react';

import styles from '../../styles/Home.module.css';

import { Payload } from '@/pages/code';

import InitialPrompt from './InitialPrompt';
import StoragePrompt from './StoragePrompt';
import SummaryPrompt from './SummaryPrompt';
import WrittenPrompt from './WrittenPrompt';

type PromptProps = {
  currPrompt: string;
  setCurrPrompt: (prompt: string) => void;
  isWritten: boolean;
  setIsWritten: (bool: boolean) => void;
  setPayload: (payload: Payload) => void;
  payload: Payload;
};
const Prompt: FC<PromptProps> = ({
  currPrompt,
  setCurrPrompt,
  isWritten,
  setIsWritten,
  setPayload,
  payload,
}) => {
  useEffect(() => {
    if (isWritten) {
      setCurrPrompt('written');
    } else {
      setCurrPrompt('initial');
    }

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isWritten]);
  return (
    <div className={styles['code-page-prompt']}>
      {currPrompt == 'written' && (
        <WrittenPrompt
          setCurrPrompt={setCurrPrompt}
          setPayload={setPayload}
          setIsWritten={setIsWritten}
          payload={payload}
        />
      )}
      {currPrompt == 'initial' && (
        <InitialPrompt setCurrPrompt={setCurrPrompt} setPayload={setPayload} />
      )}
      {currPrompt == 'storage' && (
        <StoragePrompt
          setCurrPrompt={setCurrPrompt}
          setPayload={setPayload}
          payload={payload}
        />
      )}
      {currPrompt == 'summary' && (
        <SummaryPrompt setCurrPrompt={setCurrPrompt} payload={payload} />
      )}
      {(currPrompt == 'vesting' ||
        currPrompt == 'token' ||
        currPrompt == 'escrow') && (
        <div>
          <div>Feature Coming Soon!</div>
          <button
            className={styles['code-page-prompt-button']}
            onClick={() => setCurrPrompt('initial')}
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
};
export default Prompt;
