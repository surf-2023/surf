import { FC } from 'react';

import styles from '../../styles/Home.module.css';

import DocsDirectory from './DocsDirectory';
import { DocsDirectoryType } from '../../pages/docs/index';

type InterDocBarProps = {
  docs: DocsDirectoryType[];
  setCurrDoc: (doc: DocsDirectoryType) => void;
  currDoc: DocsDirectoryType;
};
const InterDocBar: FC<InterDocBarProps> = ({ docs, setCurrDoc, currDoc }) => {
  return (
    <div className={styles['docs-page-interdocs']}>
      {docs.map((doc) => (
        <DocsDirectory
          docs={doc}
          setCurrDoc={setCurrDoc}
          key={doc.name}
          currDoc={currDoc}
        />
      ))}
    </div>
  );
};

export default InterDocBar;
