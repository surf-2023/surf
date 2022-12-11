import {
  Box,
  Center,
  Flex,
  HStack,
  Image,
  Spacer,
  Stack,
  Text,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';

import styles from '../styles/Home.module.css';

import NavBar from '@/components/NavBar';

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
            <NavBar />
          </Center>

          <Box h='calc(20vh)'></Box>
          <Center className={styles['home-page-h1']}>
            <Text className={styles['gradient']}>Smart Contract made easy</Text>
          </Center>
          <Center className={styles['p']}>a web based IDE for everyone</Center>
          <Spacer />
        </Stack>

        <Stack w='full' h='calc(100vh)' justify='center' padding='40'>
          <Spacer />
          <HStack>
            <Image
              src='/images/code-demo-1.png'
              w='40%'
              alt='logo'
              data-aos='fade-up'
            />
            <Spacer></Spacer>
            <Stack w='50%' align='center'>
              <Text className={styles['home-page-h2']}>
                Deploy smart contracts
              </Text>
              <Text className={styles['home-page-h2']}>
                <span className={styles['gradient']}>faster</span>&nbsp;than
                ever
              </Text>
              <Text w='80%' className={styles['p']}>
                As an enabler, Surf simplifies the Smart Contract creation
                process to just a few prompts, for you to instantly deploy them
                on the blockchain without knowing anything about coding.
              </Text>
            </Stack>
          </HStack>
          <Spacer />
        </Stack>

        <Stack w='full' h='calc(100vh)' justify='center' padding='40'>
          <Spacer />
          <HStack>
            <Stack w='50%' align='center'>
              <Text className={styles['home-page-h2']}>
                Easier learning with
                <span className={styles['gradient']}>&nbsp;better UI</span>
              </Text>
              <Text w='80%' className={styles['p']}>
                As an educator, Surf utilises detailed explanations and visuals
                to demystify the smart contract creation process in the best way
                possible so that anyone can start their journey as a Solana
                developer today.
              </Text>
            </Stack>
            <Spacer></Spacer>
            <Image
              src='/images/code-demo-1.png'
              w='40%'
              alt='logo'
              data-aos='fade-up'
            />
          </HStack>
          <Spacer />
        </Stack>

        <Stack w='full' h='calc(100vh)' justify='center' padding='40'>
          <Spacer />
          <HStack>
            <Image
              src='/images/code-demo-1.png'
              w='40%'
              alt='logo'
              data-aos='fade-up'
            />
            <Spacer></Spacer>
            <Stack w='50%' align='center'>
              <Text className={styles['home-page-h2']}>
                Develop with{' '}
                <span className={styles['gradient']}>&nbsp;AI</span>
              </Text>

              <Text w='80%' className={styles['p']}>
                As a companion, Surf provides templated or AI-generated code to
                accelerate your Smart-Contract creation process.
              </Text>
            </Stack>
          </HStack>
          <Spacer />
        </Stack>

        <Stack w='full' h='calc(100vh)' justify='center' padding='20'>
          <Text className={styles['p']}>Choose to start</Text>

          <Flex>
            <Box className={styles['card']}>
              <Text className={styles['p']}></Text>
            </Box>
          </Flex>

          <Text className={styles['p']}>deploy NFT</Text>

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
