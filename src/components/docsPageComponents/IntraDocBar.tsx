import { FC } from 'react';

import styles from '../../styles/Home.module.css';

import { DocsDirectoryType } from '@/pages/docs';

type IntraDocBarProps = {
  currDoc: DocsDirectoryType;
};
const IntraDocBar: FC<IntraDocBarProps> = ({ currDoc }) => {
  return (
    <div className={styles['docs-page-intradocs']}>
      {currDoc.subcontents?.map((subcontent, index) => (
        <div key={index}>{subcontent.heading}</div>
      ))}
    </div>
  );
};
export default IntraDocBar;
