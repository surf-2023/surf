import { FC, useState } from 'react';

import styles from '../../styles/Home.module.css';

import type { FileType } from './FileExplorer';

type FileProps = {
  file: FileType;
};

const File: FC<FileProps> = ({ file }) => {
  const [isVisible, toggleVisibility] = useState(false);
  return (
    <div>
      <div onClick={() => toggleVisibility(isVisible ? false : true)}>
        {file.name}
      </div>
      {file.isDirectory && isVisible && (
        <div className={styles['code-page-subfile']}>
          {file.files?.map((subfile) => (
            <File file={subfile} key={subfile.name} />
          ))}
        </div>
      )}
    </div>
  );
};
export default File;
