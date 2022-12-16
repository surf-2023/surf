import { Text } from '@chakra-ui/react';
import { FC } from 'react';

import styles from '../../styles/Home.module.css';

import PageSubContent from '@/components/docsPageComponents/PageSubContent';

import { DocsDirectoryType } from '@/pages/docs';
export type SubContent = {
  heading: string;
  content: string;
};
type PageContentProps = {
  currDoc: DocsDirectoryType;
};
const PageContent: FC<PageContentProps> = ({ currDoc }) => {
  return (
    <div className={styles['docs-page-content']}>
      <Text className={styles['docs-page-h1']}>{currDoc.name}</Text>
      {currDoc.subcontents?.map((subcontent, index) => (
        <PageSubContent
          heading={subcontent.heading}
          content={subcontent.content}
          key={index}
        />
      ))}
    </div>
  );
};
export default PageContent;
