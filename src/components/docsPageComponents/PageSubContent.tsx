import { FC } from 'react';

import styles from '../../styles/Home.module.css';

const PageSubContent: FC = ({ heading, content }) => {
  return (
    <div className={styles['docs-page-subcontent']}>
      {heading}
      <div>
        {content.split('\n').map((el, index) => (
          <div key={index}>{el}</div>
        ))}
      </div>
    </div>
  );
};
export default PageSubContent;
