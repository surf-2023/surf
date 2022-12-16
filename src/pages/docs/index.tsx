import type { NextPage } from 'next';
import { useState } from 'react';

import styles from '../../styles/Home.module.css';

import InterDocBar from '@/components/docsPageComponents/InterDocBar';
import IntraDocBar from '@/components/docsPageComponents/IntraDocBar';
import PageContent, {
  SubContent,
} from '@/components/docsPageComponents/PageContent';
import NavBar from '@/components/NavBar';

export type DocsDirectoryType = {
  name: string;
  subdirectory?: DocsDirectoryType[];
  subcontents?: SubContent[];
};
const docs: DocsDirectoryType[] = [
  {
    name: 'Basic',
    subcontents: [
      {
        heading: 'Web3',
        content: `In the simplest terms, Web3 refers to applications that are decentralized and run on a blockchain. While we'll get more into what a blockchain is, the core concept behind web3 as a whole is that everything is distributed over an open peer-to-peer network, as opposed to our current system where everything is stored on private servers. The concept allows for both a much more open and public network, as well as creating something that is incredibly permanent.
      Read More - https://ethereum.org/en/web3/`,
      },
      {
        heading: 'Blockchain',
        content: `A blockchain can be thought of as a type of digital ledger that is immutable, meaning it can't be altered. It's made up of “blocks”. Each block serves as a sort of “receipt”, containing all the information that was recorded when the block was created (a record of a transaction made). Each block has a unique hash (id) as well as the hash of the previous block in the chain, which is the principal method of security. The main attraction of a blockchain is that it is decentralized — meaning they are widely distributed and anyone can obtain a copy of the blockchain.
        Read More - https://www.investopedia.com/terms/b/blockchain.asp`,
      },
      {
        heading: 'Cryptocurrencies',
        content: `A cryptocurrency is a digital currency, which is an alternative form of payment created using encryption algorithms. The use of encryption technologies means that cryptocurrencies function both as a currency and as a virtual accounting system. To use cryptocurrencies, you need a cryptocurrency wallet. These wallets can be software that is a cloud-based service or is stored on your computer or on your mobile device. The wallets are the tool through which you store your encryption keys that confirm your identity and link to your cryptocurrency.
          Read More - https://www.simplilearn.com/tutorials/blockchain-tutorial/what-is-cryptocurrency`,
      },
      {
        heading: 'Smart Contracts',
        content: `Smart contracts are simply programs stored on a blockchain that run when predetermined conditions are met. They typically are used to automate the execution of an agreement so that all participants can be immediately certain of the outcome, without any intermediary's involvement or time loss. They can also automate a workflow, triggering the next action when conditions are met.
            Read More - https://www.ibm.com/sg-en/topics/smart-contracts`,
      },
    ],
  },
  {
    name: 'Intermediate',
    subcontents: [
      {
        heading: `More about Solana's Blockchain network`,
        content: `Solana achieves consensus using a proof-of-stake mechanism and its model, known as "proof-of-history" mechanism. Proof of history enables the network to operate faster because nodes do not need to communicate to validate a block. The Solana white-paper describes this design as a decentralised clock. Proof of history enables network participants to have a high degree of certainty that an event took place at a specific moment in time. An example of proof of history is when a person takes a picture of today's newspaper with the date and time recorded so that it can be used to verify the newspaper in the future.

          Ethereum 1.0 relies on a proof of work consensus mechanism, which is the same mechanism used by Bitcoin's blockchain. This means that the network is protected by miners, who use their computational power to validate blockchain transactions and generate new blocks. This is the essence of the decentralised network, and it serves to increase the security of the network.  However, the PoW mechanism can only process a few transactions per second, which is a huge impediment to a growing decentralised network.
          
          Solana is different from Ethereum in that it uses proof of history. In essence, it requires a series of computational steps to determine the cryptographical time between two events. This order sequencing is fundamentally different from the one in Bitcoin or Ethereum, where transactions are not placed in a  timely manner.
          
          Another essential difference between Ethereum and Solana is its “stateless” architecture. This helps to reduce memory consumption. Because the entire network's state does not need to be updated for every transaction, transactions can be performed sequentially. This makes Solana extremely scalable.
          
          Read More - https://www.cryptohopper.com/blog/4351-an-overview-of-solana-blockchain-network `,
      },
      {
        heading: 'Smart Contracts on Solana',
        content: `Solana is an open-source, programmable blockchain, indicating that the network supports smart contracts. The blockchain emphasises speed and scalability as Solana can process transactions more economically and faster than, for example, Ethereum. Solana's execution environment is based on eBPF, which allows the Rust, C, and C++ programming languages to be used.

      Read More - https://moralis.io/how-to-write-a-solana-smart-contract/`,
      },
    ],
  },
  {
    name: 'Advanced',
    subcontents: [
      {
        heading: 'Rust',
        content: `Rust is a statically-typed programming language designed for performance and safety, especially safe concurrency and memory management. Its syntax is similar to that of C++. It is an open-source project developed originally at Mozilla Research. Rust solves problems that C/C++ developers have been struggling with for a long time: memory errors and concurrent programming.
            Read More - https://www.rust-lang.org/learn`,
      },
      {
        heading: 'Writing a Smart Contract on Solana (using RUST)',
        content: `
            1. Install Rust and the Solana CLI (https://moralis.io/how-to-write-a-solana-smart-contract/)\n

            2. Create a Rust project using your preferred IDE (https://moralis.io/how-to-write-a-solana-smart-contract/)\n

            3. Code the Smart Contract (https://moralis.io/how-to-write-a-solana-smart-contract/)\n

            4. Call the Smart Contract (https://moralis.io/how-to-write-a-solana-smart-contract/)\n

            For a detailed step by step guide on creating Smart Contracts using RUST, refer to https://moralis.io/how-to-write-a-solana-smart-contract/.
            `,
      },
    ],
  },
];

const DocsPage: NextPage = () => {
  const [currDoc, setCurrDoc] = useState<DocsDirectoryType>(docs[0]);
  return (
    <div className={styles['docs-page-background']}>
      <NavBar />
      <div className={styles['docs-page-container']}>
        <InterDocBar docs={docs} setCurrDoc={setCurrDoc} currDoc={currDoc} />
        <PageContent currDoc={currDoc} />
        <IntraDocBar currDoc={currDoc} />
      </div>
    </div>
  );
};

export default DocsPage;
