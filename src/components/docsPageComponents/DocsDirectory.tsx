import { FC, useState } from 'react';

import styles from '../../styles/Home.module.css';

import { DocsDirectoryType } from '../../pages/docs/index';

type DocsProps = {
  docs: DocsDirectoryType;
  setCurrDoc: (doc: DocsDirectoryType) => void;
  currDoc: DocsDirectoryType;
};

const Docs: FC<DocsProps> = ({ docs, setCurrDoc, currDoc }) => {
  const [isVisible, toggleVisibility] = useState(false);
  const isEndpoint = docs.subdirectory == undefined;
  const handleClick = () => {
    if (isEndpoint) {
      setCurrDoc(docs);
    } else {
      toggleVisibility(isVisible ? false : true);
    }
  };
  return (
    <div>
      <div
        className={
          currDoc.name == docs.name ? styles['docs-page-selected-doc'] : ''
        }
        onClick={handleClick}
      >
        {docs.name}
      </div>
      {isVisible && (
        <div className={styles['docs-page-subdirectory']}>
          {docs.subdirectory?.map((subdoc) => (
            <Docs
              docs={subdoc}
              key={subdoc.name}
              setCurrDoc={setCurrDoc}
              currDoc={currDoc}
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default Docs;
