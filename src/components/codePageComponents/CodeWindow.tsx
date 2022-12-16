import { FC } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { stackoverflowDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import styles from '../../styles/Home.module.css';

type CodeWindowProps = {
  code: string;
  loadingCode: boolean;
};
const CodeWindow: FC<CodeWindowProps> = ({ code, loadingCode }) => {
  return (
    <div className={styles['code-page-code-window']}>
      {loadingCode && (
        <div className={styles['code-page-loading-screen']}>
          Generating your code...
        </div>
      )}
      {!loadingCode && code != '' && (
        <SyntaxHighlighter
          style={stackoverflowDark}
          className={styles['code-page-code']}
          language='rust'
          showLineNumbers={true}
          wrapLines={true}
          customStyle={{ background: '#1f1f1f' }}
        >
          {code}
        </SyntaxHighlighter>
      )}
    </div>
  );
};
export default CodeWindow;
