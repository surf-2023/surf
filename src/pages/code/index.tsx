import type { NextPage } from 'next';
import { useState } from 'react';

import styles from '../../styles/Home.module.css';

import CodeWindow from '@/components/codePageComponents/CodeWindow';
import Diagram from '@/components/codePageComponents/Diagram';
import FileExplorer from '@/components/codePageComponents/FileExplorer';
import Prompt from '@/components/codePageComponents/Prompt';
import NavBar from '@/components/NavBar';

const CodePage: NextPage = () => {
  const [isWritten, setIsWritten] = useState(false);
  return (
    <div className={styles['code-page-background']}>
      <NavBar />
      <div className={styles['code-page-container']}>
        <div className={styles['code-page-left']}>
          <div className={styles['code-page-upper-left']}>
            <FileExplorer />
            <Diagram />
          </div>
          <Prompt isWritten={isWritten} />
        </div>
        <CodeWindow />
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
          <button className={styles['code-page-prompt-button']}>Export</button>
          <button className={styles['code-page-prompt-button']}>Deploy</button>
        </div>
      </div>
    </div>
  );
};
export default CodePage;
