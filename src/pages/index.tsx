import {
  Box,
  Center,
  Flex,
  Image,
  Spacer,
  Stack,
  Text,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';

import styles from '../styles/Home.module.css';

import WithSubnavigation from '@/components/NavBar';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Surf</title>
        <meta name='smart contract esay onboarding' />
        <link rel='icon' href='/logo.ico' />
      </Head>

      <Box w='full' h='auto'>
        <Stack
          w='full'
          h='calc(100vh)'
          justify='center'
          bgSize='80%'
          bgImage="url('/images/home-page-1.png')"
          bgRepeat='no-repeat'
          bgPosition='bottom'
        >
          <WithSubnavigation />

          <Box h='calc(20vh)'></Box>
          <Center className={styles['home-page-h1']}>
            <Text className={styles['gradient']}>
              Smart Contract made easy!
            </Text>
          </Center>
          <Center className={styles['p']}>a web based IDE for everyone</Center>
          <Spacer />
        </Stack>

        <Stack w='full' h='calc(100vh)' justify='center'>
          <Spacer />
          <Flex>
            <Image src='/images/home1.png' boxSize='50px' alt='logo' />
            <Spacer />
            <Stack>
              <Center className={styles['home-page-h2']}>
                Smart Contract made easy!
              </Center>
              <Center className={styles['p']}>
                a web based IDE for everyone
              </Center>
            </Stack>
          </Flex>
          <Spacer />
        </Stack>

        <Stack w='full' h='calc(100vh)' justify='center'>
          <Spacer />
          <Flex>
            <Stack>
              <Center className={styles['home-page-h2']}>
                Smart Contract made easy!
              </Center>
              <Center className={styles['p']}>
                a web based IDE for everyone
              </Center>
            </Stack>
            <Spacer />
            <Image src='/images/home1.png' boxSize='50px' alt='logo' />
          </Flex>
          <Spacer />
        </Stack>

        <Stack w='full' h='calc(100vh)' justify='center'>
          <Spacer />
          <Flex>
            <Image src='/images/home1.png' boxSize='50px' alt='logo' />
            <Spacer />
            <Stack>
              <Center className={styles['home-page-h2']}>
                Smart Contract made easy!
              </Center>
              <Center className={styles['p']}>
                a web based IDE for everyone
              </Center>
            </Stack>
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
