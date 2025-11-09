'use client';

import '@rainbow-me/rainbowkit/styles.css';
import { ReactNode, useMemo } from 'react';
import {
  RainbowKitProvider,
  getDefaultWallets,
  darkTheme
} from '@rainbow-me/rainbowkit';
import { WagmiConfig, createConfig, http } from 'wagmi';
import { base, baseSepolia } from 'wagmi/chains';
import { injected } from 'wagmi/connectors';

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_ID || '';

function chainFromEnv() {
  const v = (process.env.NEXT_PUBLIC_DEFAULT_CHAIN || 'base').toLowerCase();
  return v === 'base-sepolia' ? baseSepolia : base;
}

export default function Providers({ children }: { children: ReactNode }) {
  const chain = chainFromEnv();

  const { wallets } = getDefaultWallets({
    appName: process.env.NEXT_PUBLIC_PROJECT_NAME || 'Crash_Out_Crypto',
    projectId,
    chains: [base, baseSepolia],
  });

  const config = useMemo(() => createConfig({
    chains: [base, baseSepolia],
    transports: {
      [base.id]: http(),
      [baseSepolia.id]: http()
    },
    connectors: [
      ...wallets.flatMap((w) => w.connectors),
      injected({ shimDisconnect: true })
    ]
  }), [wallets]);

  return (
    <WagmiConfig config={config}>
      <RainbowKitProvider
        initialChain={chain}
        theme={darkTheme({accentColor: '#FFD166'})}
      >
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
