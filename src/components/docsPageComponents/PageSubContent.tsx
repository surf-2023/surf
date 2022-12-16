import { Text } from '@chakra-ui/react';
import { FC } from 'react';

import styles from '../../styles/Home.module.css';

const PageSubContent: FC = ({ heading, content, navigateToDoc }) => {
  return (
    <div className={styles['docs-page-subcontent']}>
      <Text className={styles['docs-page-h2']}>{heading}</Text>
      {content == '' && (
        <>
          <div className={styles['docs-page-div']}>
            The{' '}
            <span
              className={styles['docs-page-link']}
              onClick={() => navigateToDoc(1)}
            >
              Basics
            </span>{' '}
            Page provides the most fundamental level of knowledge required to
            navigate the Surfboard (our IDE), and ultimately create and deploy
            your Smart Contracts using our interface.
          </div>
          <div className={styles['docs-page-div']}>
            The{' '}
            <span
              className={styles['docs-page-link']}
              onClick={() => navigateToDoc(2)}
            >
              Intermediate
            </span>{' '}
            and{' '}
            <span
              className={styles['docs-page-link']}
              onClick={() => navigateToDoc(3)}
            >
              Advanced
            </span>{' '}
            Pages provides more in depth technical knowledge that might help
            users gain more comprehensive knowledge on technologies relevant to
            Smart Contract Creation on the Solana Network.
          </div>
        </>
      )}
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
