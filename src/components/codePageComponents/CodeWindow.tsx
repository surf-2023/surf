import { FC } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { stackoverflowDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import styles from '../../styles/Home.module.css';

const CodeWindow: FC = ({ code }) => {
  return (
    <div className={styles['code-page-code-window']}>
      {code != '' && (
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
