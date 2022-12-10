import { FC } from 'react';

import styles from '../../styles/Home.module.css';

import File from './File';

export type FileType = {
  name: string;
  isDirectory: boolean;
  files?: FileType[];
};
const files: FileType[] = [
  {
    name: 'app',
    files: [{ name: 'client.js', isDirectory: false }],
    isDirectory: true,
  },
  {
    name: 'migrations',
    files: [{ name: 'deploy.ts', isDirectory: false }],
    isDirectory: true,
  },
  {
    name: 'programs',
    files: [
      {
        name: 'src',
        files: [{ name: 'lib.rs', isDirectory: false }],
        isDirectory: true,
      },
    ],
    isDirectory: true,
  },
];
const FileExplorer: FC = () => {
  return (
    <div className={styles['code-page-file-explorer']}>
      {files.map((file) => (
        <File file={file} key={file.name} />
      ))}
    </div>
  );
};
export default FileExplorer;
