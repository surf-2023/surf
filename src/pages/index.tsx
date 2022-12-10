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
          bgSize='70%'
          bgImage="url('/images/home-page-1.png')"
          bgRepeat='no-repeat'
          bgPosition='center'
        >
          <Center>
            <WithSubnavigation />
          </Center>

          <Box h='calc(20vh)'></Box>
          <Center className={styles['home-page-h1']}>
            <Text className={styles['gradient']}>Smart Contract made easy</Text>
          </Center>
          <Center className={styles['p']}>a web based IDE for everyone</Center>
          <Spacer />
        </Stack>

        <Stack w='full' h='calc(100vh)' justify='center' padding='20'>
          <Spacer />
          <Flex>
            <Image src='/images/code-demo-1.png' boxSize='50px' alt='logo' />
            <Spacer />
            <Stack>
              <Center className={styles['home-page-h2']}>
                Deploy smart contracts
              </Center>
              <Center className={styles['home-page-h2']}>
                <span className={styles['gradient']}>faster</span>&nbsp;than
                ever
              </Center>
              <Center className={styles['p']}>
                a web based IDE for everyone
              </Center>
            </Stack>
          </Flex>
          <Spacer />
        </Stack>

        <Stack w='full' h='calc(100vh)' justify='center' padding='20'>
          <Spacer />
          <Flex>
            <Stack>
              <Center className={styles['home-page-h2']}>
                Learn and develop
              </Center>
              <Center className={styles['home-page-h2']}>
                together with{' '}
                <span className={styles['gradient']}>&nbsp;AI</span>
              </Center>
              <Center className={styles['p']}>
                a web based IDE for everyone
              </Center>
            </Stack>
            <Spacer />
            <Image src='/images/code-demo-1.png' boxSize='50px' alt='logo' />
          </Flex>
          <Spacer />
        </Stack>

        <Stack w='full' h='calc(100vh)' justify='center' padding='20'>
          <Stack justify='left'>
            <Text className={styles['p']}>deploy token</Text>
          </Stack>
          <Flex></Flex>
          <Stack>
            <Text className={styles['p']}>deploy NFT</Text>
          </Stack>
          <Flex></Flex>
          <Spacer />

          <Center>
            <Box>
              <a
                href='https://twitter.com/MetacampDAO'
                target='_blank'
                rel='noopener noreferrer'
                className={styles['p']}
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
