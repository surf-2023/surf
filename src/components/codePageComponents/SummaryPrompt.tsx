import { FC } from 'react';

import styles from '../../styles/Home.module.css';

const SummaryPrompt: FC = ({ setCurrPrompt, payload }) => {
  return (
    <div className={styles['code-page-storage-prompt']}>
      <div>Prompt chosen: {payload.template}</div>
      {payload.template == 'Simple Storage' && (
        <>
          <div>Name of database: {payload.name}</div>
          <ul>
            Attributes:
            {payload.attributes.map((attr, index) => (
              <li key={index} className={styles['code-page-attributes-list']}>
                Name: {attr.name}, Type: {attr.type}
              </li>
            ))}
          </ul>
        </>
      )}
      {payload.template == 'Escrow Service' && (
        <>
          <div>User A Address: {payload.addressA}</div>
          <div>User A Tokens: {payload.tokenA}</div>
          <div>User B Address: {payload.addressB}</div>
          <div>User B Tokens: {payload.tokenB}</div>
        </>
      )}
      <button
        className={styles['code-page-prompt-proceed-button']}
        onClick={() => setCurrPrompt('initial')}
      >
        Back To Suggested Prompts
      </button>
    </div>
  );
};
export default SummaryPrompt;
