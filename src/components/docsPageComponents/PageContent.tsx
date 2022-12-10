import { FC } from 'react';

import styles from '../../styles/Home.module.css';
type PageContentProps = {
  currDoc: string;
};
const PageContent: FC<PageContentProps> = ({ currDoc }) => {
  return <div className={styles['docs-page-content']}>{currDoc}</div>;
};
export default PageContent;
