import type { NextPage } from 'next';
import { useState } from 'react';

import styles from '../../styles/Home.module.css';

import InterDocBar from '@/components/docsPageComponents/InterDocBar';
import IntraDocBar from '@/components/docsPageComponents/IntraDocBar';
import PageContent from '@/components/docsPageComponents/PageContent';
import NavBar from '@/components/NavBar';

export type DocsDirectoryType = {
  name: string;
  subdirectory?: DocsDirectoryType[];
};
const docs: DocsDirectoryType[] = [
  { name: 'Overview' },
  {
    name: 'Tracks',
    subdirectory: [
      { name: 'Basic' },
      { name: 'Intermediate' },
      { name: 'Advanced' },
    ],
  },
];
const DocsPage: NextPage = () => {
  const [currDoc, setCurrDoc] = useState('Overview');
  return (
    <div className={styles['docs-page-background']}>
      <NavBar />
      <div className={styles['docs-page-container']}>
        <InterDocBar docs={docs} setCurrDoc={setCurrDoc} currDoc={currDoc} />
        <PageContent currDoc={currDoc} />
        <IntraDocBar />
      </div>
    </div>
  );
};

export default DocsPage;
