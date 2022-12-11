import { FC, useState } from 'react';

import styles from '../../styles/Home.module.css';

const EscrowPrompt: FC = ({ setCurrPrompt, setPayload, payload }) => {
  const [tokenA, setTokenA] = useState(
    payload.tokenA == undefined ? '' : payload.tokenA
  );
  const [addressA, setAddressA] = useState(
    payload.addressA == undefined ? '' : payload.addressA
  );
  const [tokenB, setTokenB] = useState(
    payload.tokenB == undefined ? '' : payload.tokenB
  );
  const [addressB, setAddressB] = useState(
    payload.addressB == undefined ? '' : payload.addressB
  );
  const handleTokenChange = (event, user) => {
    const newValue = event.target.value;
    const regex = new RegExp('^[0-9]*$');
    if (!regex.test(newValue)) {
      alert('Invalid Input: Tokens must be a numeric value');
      return;
    }
    if (user == 'A') {
      setTokenA(event.target.value);
    } else {
      setTokenB(event.target.value);
    }
  };
  const handleAddresssChange = (event, user) => {
    const newValue = event.target.value;
    const regex = new RegExp(
      '^[1-9ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]*$'
    );
    if (!regex.test(newValue)) {
      alert('Invalid Input: Address must be in base58');
      return;
    }
    if (user == 'A') {
      setAddressA(newValue);
    } else {
      setAddressB(newValue);
    }
  };
  return (
    <div className={styles['code-page-storage-prompt']}>
      <div>
        User A would like to transfer{' '}
        <input
          onChange={(event) => handleTokenChange(event, 'A')}
          value={tokenA}
          className={styles['code-page-prompt-input']}
        />{' '}
        tokens with the following address{' '}
        <input
          onChange={(event) => handleAddresssChange(event, 'A')}
          value={addressA}
          className={styles['code-page-prompt-input']}
        />{' '}
        to User B, provided that User B in turn transfer{' '}
        <input
          onChange={(event) => handleTokenChange(event, 'B')}
          value={tokenB}
          className={styles['code-page-prompt-input']}
        />{' '}
        tokens with the following address{' '}
        <input
          onChange={(event) => handleAddresssChange(event, 'B')}
          value={addressB}
          className={styles['code-page-prompt-input']}
        />{' '}
        to User A
      </div>
      <div className={styles['code-page-prompt-button-container']}>
        <button
          onClick={() => setCurrPrompt('initial')}
          className={styles['code-page-prompt-proceed-button']}
        >
          Back
        </button>

        <button
          onClick={() => {
            if (
              tokenA == '' ||
              tokenB == '' ||
              addressA == '' ||
              addressB == ''
            ) {
              alert('Invalid Input: All fields must be non-empty');
              return;
            }
            if (
              addressA.length < 32 ||
              addressA.length > 44 ||
              addressB.length < 32 ||
              addressB.length > 44
            ) {
              alert(
                'Invalid Input: Addresses must be between 32 and 44 characters'
              );
              return;
            }
            setCurrPrompt('summary');
            setPayload((prev) => ({
              ...prev,
              tokenA,
              addressA,
              tokenB,
              addressB,
            }));
          }}
          className={styles['code-page-prompt-proceed-button']}
        >
          Generate
        </button>
      </div>
    </div>
  );
};
export default EscrowPrompt;
