import { FC, useEffect } from 'react';

import styles from '../../styles/Home.module.css';

import { Payload } from '@/pages/code';

type InitialPromptProps = {
  setCurrPrompt: (prompt: string) => void;
  setPayload: (payload: Payload) => void;
};
const InitialPrompt: FC<InitialPromptProps> = ({
  setCurrPrompt,
  setPayload,
}) => {
  useEffect(() => {
    setPayload({});
  }, [setPayload]);
  return (
    <div>
      <div>What type of smart contract would you like to create?</div>
      <div
        className={styles['code-page-initial-prompt']}
        onClick={() => {
          setCurrPrompt('storage');
          setPayload((prev) => ({ ...prev, template: 'Simple Storage' }));
        }}
      >
        Simple Storage
      </div>
      <div
        className={styles['code-page-initial-prompt']}
        onClick={() => {
          setCurrPrompt('escrow');
          setPayload((prev) => ({ ...prev, template: 'Escrow Service' }));
        }}
      >
        Escrow Service
      </div>
      <div
        className={styles['code-page-initial-prompt']}
        onClick={() => setCurrPrompt('vesting')}
      >
        Vesting Service
      </div>
      <div
        className={styles['code-page-initial-prompt']}
        onClick={() => setCurrPrompt('token')}
      >
        Initial Token Offering
      </div>
    </div>
  );
};
export default InitialPrompt;
