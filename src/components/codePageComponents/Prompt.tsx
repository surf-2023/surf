import { FC, useState } from 'react';

import styles from '../../styles/Home.module.css';

import EscrowPrompt from './EscrowPrompt';
import InitialPrompt from './InitialPrompt';
import StoragePrompt from './StoragePrompt';
import SummaryPrompt from './SummaryPrompt';

const Prompt: FC = () => {
  const [currPrompt, setCurrPrompt] = useState('initial');
  const [payload, setPayload] = useState({});
  return (
    <div className={styles['code-page-prompt']}>
      {currPrompt == 'initial' && (
        <InitialPrompt setCurrPrompt={setCurrPrompt} setPayload={setPayload} />
      )}
      {currPrompt == 'storage' && (
        <StoragePrompt setCurrPrompt={setCurrPrompt} setPayload={setPayload} />
      )}
      {currPrompt == 'escrow' && (
        <EscrowPrompt setCurrPrompt={setCurrPrompt} setPayload={setPayload} />
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
