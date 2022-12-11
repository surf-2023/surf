import { FC, useEffect, useState } from 'react';

import styles from '../../styles/Home.module.css';

import EscrowPrompt from './EscrowPrompt';
import InitialPrompt from './InitialPrompt';
import StoragePrompt from './StoragePrompt';
import SummaryPrompt from './SummaryPrompt';
import WrittenPrompt from './WrittenPrompt';

const Prompt: FC = ({ isWritten }) => {
  const [currPrompt, setCurrPrompt] = useState('initial');
  const [payload, setPayload] = useState({});
  useEffect(() => {
    if (isWritten) {
      setCurrPrompt('written');
    } else {
      setCurrPrompt('initial');
    }
  }, [isWritten]);
  return (
    <div className={styles['code-page-prompt']}>
      {currPrompt == 'written' && (
        <WrittenPrompt
          setCurrPrompt={setCurrPrompt}
          setPayload={setPayload}
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
      {currPrompt == 'escrow' && (
        <EscrowPrompt
          setCurrPrompt={setCurrPrompt}
          setPayload={setPayload}
          payload={payload}
        />
      )}
      {currPrompt == 'summary' && (
        <SummaryPrompt setCurrPrompt={setCurrPrompt} payload={payload} />
      )}
      {(currPrompt == 'vesting' || currPrompt == 'token') && (
        <div>
          <div>Feature Coming Soon!</div>
          <button onClick={() => setCurrPrompt('initial')}>Back</button>
        </div>
      )}
    </div>
  );
};
export default Prompt;
