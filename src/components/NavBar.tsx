import { HStack, Spacer } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { FC } from 'react';

import styles from '../styles/Home.module.css';

const WalletMultiButtonDynamic = dynamic(
  () =>
    import('@solana/wallet-adapter-react-ui').then(
      (mod) => mod.WalletMultiButton
    ),
  { ssr: false }
);
const NavBar: FC = () => {
  return (
    <HStack width='full' padding={4}>
      <h1 color='while'>SURF</h1>
      <Spacer />
      <WalletMultiButtonDynamic
        className={styles['wallet-adapter-button-trigger']}
      />
    </HStack>
  );
};

export default NavBar;
