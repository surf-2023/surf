import { FC, useState } from 'react';

import styles from '../../styles/Home.module.css';

const File: FC = ({ file }) => {
  const [isVisible, toggleVisibility] = useState(false);
  return (
    <div>
      <div onClick={() => toggleVisibility(isVisible ? false : true)}>
        {file.name}
      </div>
      {file.isDirectory && isVisible && (
        <div className={styles['code-page-subfile']}>
          {file.files.map((subfile) => (
            <File file={subfile} key={subfile} />
          ))}
        </div>
      )}
    </div>
  );
};
export default File;
