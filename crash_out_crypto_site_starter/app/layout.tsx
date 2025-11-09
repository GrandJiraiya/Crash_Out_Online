import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';
import Providers from '@/components/Providers';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_PROJECT_NAME || 'Crash_Out_Crypto',
  description: 'Crash_Out_Crypto — Web3 hub for mints, apps, and onchain mischief.',
  metadataBase: new URL('https://crashoutcrypto.dev')
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <NavBar />
          <main className="container">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
