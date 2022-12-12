import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

import styles from '../../styles/Home.module.css';

import CodeWindow from '@/components/codePageComponents/CodeWindow';
import Diagram from '@/components/codePageComponents/Diagram';
import FileExplorer from '@/components/codePageComponents/FileExplorer';
import Prompt from '@/components/codePageComponents/Prompt';
import NavBar from '@/components/NavBar';

const CodePage: NextPage = () => {
  const [isWritten, setIsWritten] = useState(false);
  const [payload, setPayload] = useState({});
  const [returnedCode, setReturnedCode] = useState('');
  const [currPrompt, setCurrPrompt] = useState('initial');
  useEffect(() => {
    if (currPrompt == 'summary') {
      getCode();
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [payload]);
  const getCode = async () => {
    let res;
    if (payload.template == 'Simple Storage') {
      const dbname = payload.name;
      const attrnames = payload.attributes.map((x) => x.name).join(',');

      /*
      const attrnames = payload.attributes.reduce(
        (prev, curr) => prev + ',' + curr.name,
        ''
      );
      */

      const attrtypes = payload.attributes.map((x) => x.type).join(',');

      /*
      const attrtypes = payload.attributes.reduce(
        (prev, curr) => prev + ',' + curr.type,
        ''
      );
      */

      res = await fetch(
        '/api/simplestorage?' +
          new URLSearchParams({ dbname, attrnames, attrtypes })
      );
    } else if (payload.template == 'Free Writing') {
      res = await fetch('/api/escrow');
    }
    const response = await res.json();
    setReturnedCode(response.code);
  };
  return (
    <div className={styles['code-page-background']}>
      <NavBar />
      <div className={styles['code-page-container']}>
        <div className={styles['code-page-left']}>
          <div className={styles['code-page-upper-left']}>
            <FileExplorer />
            <Diagram />
          </div>
          <Prompt
            isWritten={isWritten}
            setIsWritten={setIsWritten}
            payload={payload}
            setPayload={setPayload}
            getCode={getCode}
            currPrompt={currPrompt}
            setCurrPrompt={setCurrPrompt}
          />
        </div>
        <CodeWindow code={returnedCode} />
      </div>
      <div className={styles['code-page-bottom']}>
        <button
          className={
            isWritten
              ? styles['code-page-toggle-button-active']
              : styles['code-page-toggle-button']
          }
          onClick={() => setIsWritten(isWritten ? false : true)}
        >
          {isWritten ? 'Go to Suggested Prompts' : 'Go to Free Writing'}
        </button>
        <div className={styles['code-page-button-container']}>
          {returnedCode != '' && (
            <>
              <CopyToClipboard
                text={returnedCode}
                onCopy={() => alert('Successfully copied!')}
              >
                <button className={styles['code-page-prompt-button']}>
                  Export
                </button>
              </CopyToClipboard>
              <button className={styles['code-page-prompt-button']}>
                Deploy
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default CodePage;
