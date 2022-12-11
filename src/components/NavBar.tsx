import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Icon,
  Image,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import dynamic from 'next/dynamic';

import styles from '../styles/Home.module.css';

const WalletMultiButtonDynamic = dynamic(
  () =>
    import('@solana/wallet-adapter-react-ui').then(
      (mod) => mod.WalletMultiButton
    ),
  { ssr: false }
);

export default function NavBar() {
  return (
    <Box>
      <Flex
        bg='#ad7404'
        color={useColorModeValue('gray.600', 'white')}
        minH='60px'
        py={{ base: 1 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle='solid'
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align='center'
        borderBottomRadius='5'
        border='3px solid #000000'
      >
        <Flex
          flex={{ base: 1 }}
          justify={{ base: 'center', md: 'start' }}
          align='center'
        >
          <Image src='/images/logo.png' boxSize='20%' alt='logo' />
          {/* <Spacer /> */}
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 1 }}
          justify='flex-end'
          direction='row'
          spacing={6}
        >
          <WalletMultiButtonDynamic
            className={styles['wallet-adapter-button-trigger']}
          />
        </Stack>
      </Flex>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('black', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction='row' spacing={6}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger='hover' placement='bottom-start'>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize='sm'
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                // boxShadow='xl'
                bg={popoverContentBgColor}
                p={4}
                rounded='xl'
                minW='sm'
                background='#FFFFFF'
                border='3px solid #000000'
                box-shadow='3px 3px 0px rgba(0, 0, 0, 0.43)'
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role='group'
      display='block'
      p={2}
      rounded='md'
      border='3px solid #000000'
      box-shadow='3px 3px 0px rgba(0, 0, 0, 0.43)'
      _hover={{ bg: useColorModeValue('#f0dcb4', 'gray.900') }}
    >
      <Stack direction='row' align='center'>
        <Box>
          <Text
            transition='all .3s ease'
            // _groupHover={{ color: '#FFFFFF' }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize='sm'>{subLabel}</Text>
        </Box>
        <Flex
          transition='all .3s ease'
          transform='translateX(-10px)'
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify='flex-end'
          align='center'
          flex={1}
        >
          <Icon color='p#FFFFFF' w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'SurfBoard',
    href: '/code',
  },
  {
    label: 'Docs',
    children: [
      {
        label: 'Meet Solana',
        subLabel: 'What is Solana',
        href: 'https://solana.com/',
      },
      {
        label: 'Meet Rust',
        subLabel: 'An exclusive list for contract work',
        href: '/docs',
      },
    ],
  },
  {
    label: 'About Us',
    children: [
      {
        label: 'Our Goal',
        href: '#',
      },
      {
        label: 'Our Teams',
        href: '#',
      },
    ],
  },
];
