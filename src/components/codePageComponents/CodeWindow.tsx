import { FC } from 'react';

import styles from '../../styles/Home.module.css';

const CodeWindow: FC = ({ code }) => {
  return (
    <div className={styles['code-page-code-window']}>
      <div
        className={styles['code-page-code']}
        dangerouslySetInnerHTML={{ __html: code.replace(/\n/g, '<br>') }}
      ></div>
    </div>
  );
};
export default CodeWindow;
