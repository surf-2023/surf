import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import AOS from 'aos';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';

import 'aos/dist/aos.css';

import WalletContextProvider from '../components/WalletContextProvider';

const styles = {};

const theme = extendTheme({ styles });

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <WalletContextProvider>
        <Component {...pageProps} />
      </WalletContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
