import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { Web3Modal } from '@web3modal/react';
import { CustomTheme } from './theme/theme';
import reportWebVitals from './reportWebVitals';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { EthereumClient, modalConnectors, walletConnectProvider } from '@web3modal/ethereum';
const chains = [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum];

const { provider } = configureChains(chains, [
  walletConnectProvider({ projectId: '762a7299d54aa1b85272b036e5467ec8' }),
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({ appName: 'web3Modal', chains }),
  provider,
});

// Web3Modal Ethereum Client
const ethereumClient = new EthereumClient(wagmiClient, chains);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ChakraProvider theme={CustomTheme}>
    <WagmiConfig client={wagmiClient}>
      <App />
    </WagmiConfig>

    <Web3Modal projectId="762a7299d54aa1b85272b036e5467ec8" ethereumClient={ethereumClient} />
  </ChakraProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
