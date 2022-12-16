import { Text } from '@chakra-ui/react';
import { FC } from 'react';

import styles from '../../styles/Home.module.css';

const PageSubContent: FC = ({ heading, content }) => {
  return (
    <div className={styles['docs-page-subcontent']}>
      <Text className={styles['docs-page-h2']}>{heading}</Text>
      <div>
        {content.split('\n').map((el, index) => (
          <div key={index} className={styles['docs-page-div']}>
            {el}
          </div>
        ))}
      </div>
    </div>
  );
};
export default PageSubContent;
