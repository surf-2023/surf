import type { NextPage } from 'next';

import styles from '../../styles/Home.module.css';

import CodeWindow from '@/components/codePageComponents/CodeWindow';
import Diagram from '@/components/codePageComponents/Diagram';
import FileExplorer from '@/components/codePageComponents/FileExplorer';
import Prompt from '@/components/codePageComponents/Prompt';
import NavBar from '@/components/NavBar';

const CodePage: NextPage = () => {
  return (
    <div className={styles['code-page-background']}>
      <NavBar />
      <div className={styles['code-page-container']}>
        <div className={styles['code-page-left']}>
          <div className={styles['code-page-upper-left']}>
            <FileExplorer />
            <Diagram />
          </div>
          <Prompt />
        </div>
        <CodeWindow />
      </div>
    </div>
  );
};
export default CodePage;
