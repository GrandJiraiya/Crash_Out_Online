'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { ConnectButton } from '@rainbow-me/rainbowkit';

function NavItem({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link href={href} className={active ? 'active' : ''}>
      {children}
    </Link>
  );
}

export function NavBar(){
  return (
    <nav>
      <div className="container inner">
        <Link href="/">
          <div style={{display:'flex',alignItems:'center',gap:10}}>
            <img src="/logo.svg" width={28} height={28} alt="logo"/>
            <strong>{process.env.NEXT_PUBLIC_PROJECT_NAME || 'Crash_Out_Crypto'}</strong>
          </div>
        </Link>
        <div style={{display:'flex', gap:8, marginLeft:12}}>
          <span className="badge">WE RISE AT DAWN</span>
        </div>
        <div style={{flex:1}}/>
        <div style={{display:'flex', gap:8}}>
          <NavItem href="/">Home</NavItem>
          <NavItem href="/store">Store</NavItem>
          <NavItem href="/apps">Apps</NavItem>
        </div>
        <div style={{marginLeft:12}}>
          <ConnectButton />
        </div>
      </div>
    </nav>
  );
}
