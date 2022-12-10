import { Box, Center, Flex, Image, Spacer, Stack } from '@chakra-ui/react';
import { useWallet } from '@solana/wallet-adapter-react';
import type { NextPage } from 'next';
import Head from 'next/head';

// import { connected } from "process"
import styles from '../styles/Home.module.css';

import WithSubnavigation from '@/components/NavBar';

const Home: NextPage = () => {
  const { connected } = useWallet();
  return (
    <div className={styles.container}>
      <Head>
        <title>Buildoors</title>
        <meta name='The NFT Collection for Buildoors' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Box
        w='full'
        h='auto'
        bgImage={connected ? '' : 'url(/images/home-background.svg)'}
        backgroundPosition='center'
      >
        <Stack w='full' h='calc(100vh)' justify='center'>
          <WithSubnavigation />

          <Spacer />
          <Center>Smart Contract made easy!</Center>
          <Spacer />
        </Stack>

        <Stack w='full' h='calc(100vh)' justify='center'>
          <Spacer />
          <Flex>
            <Image src='/images/home1.png' boxSize='50px' alt='logo' />
            <Center>Smart Contract made easy!</Center>
          </Flex>
          <Spacer />
        </Stack>

        <Stack w='full' h='calc(100vh)' justify='center'>
          <Spacer />
          <Flex>
            <Center>Smart Contract made easy!</Center>
            <Image src='/images/home1.png' boxSize='50px' alt='logo' />
          </Flex>
          <Spacer />
        </Stack>

        <Stack w='full' h='calc(100vh)' justify='center'>
          <Spacer />
          <Flex>
            <Image src='/images/home1.png' boxSize='50px' alt='logo' />
            <Center>Smart Contract made easy!</Center>
          </Flex>
          <Spacer />
        </Stack>

        <Stack w='full' h='calc(100vh)' justify='center'>
          <Spacer />
          <Center>Smart Contract made easy!</Center>
          <Spacer />

          <Center>
            <Box marginBottom={4} color='white'>
              <a
                href='https://twitter.com/MetacampDAO'
                target='_blank'
                rel='noopener noreferrer'
              >
                built @metacamp
              </a>
            </Box>
          </Center>
        </Stack>
      </Box>
    </div>
  );
};

export default Home;
