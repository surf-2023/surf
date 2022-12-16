import { FC } from 'react';

import styles from '../../styles/Home.module.css';
const IntraDocBar: FC = ({ currDoc }) => {
  return (
    <div className={styles['docs-page-intradocs']}>
      {currDoc.subcontents?.map((subcontent, index) => (
        <div key={index}>{subcontent.heading}</div>
      ))}
    </div>
  );
};
export default IntraDocBar;
