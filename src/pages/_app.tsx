import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

import WalletContextProvider from '../components/WalletContextProvider';

const styles = {
  // background: '#1F1F1F',
  // accent: '#833BBE',
  // bodyText: 'rgba(255, 255, 255, 0.75)',
  textStyles: {
    h1: {
      // you can also use responsive styles
      fontFamily: 'Mona Sans Pro',
      fontSize: '150px',
      fontWeight: 'bold',
      lineHeight: '110%',
      letterSpacing: '-2%',
    },
    h2: {
      fontSize: ['36px', '48px'],
      fontWeight: 'semibold',
      lineHeight: '110%',
      letterSpacing: '-1%',
    },
  },
};

const theme = extendTheme({ styles });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <WalletContextProvider>
        <Component {...pageProps} />
      </WalletContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
