import Link from 'next/link';

export default function Home(){
  return (
    <section className="hero">
      <div>
        <h1>Crash_Out_Crypto</h1>
        <p style={{color:'var(--muted)', maxWidth:640}}>
          A living hub for lore, mints, and mini‑apps. Connect your wallet, collect the canon, 
          and launch dapps forged in the Oathlands. Built on <strong>Base</strong>.
        </p>
        <div style={{display:'flex', gap:12, marginTop:18}}>
          <Link className="btn" href="/store">Enter the Store</Link>
          <Link className="btn" href="/apps">Explore Apps</Link>
        </div>
        <div style={{marginTop:16}} className="small mono">Tip: switch to Base Sepolia in the wallet to test.</div>
      </div>
      <div className="card">
        <h2>Quick Links</h2>
        <ul>
          <li><a href="https://zora.co" target="_blank" rel="noreferrer">Zora</a> — mint & collect</li>
          <li><a href="https://base.org" target="_blank" rel="noreferrer">Base</a> — L2 network</li>
          <li><a href="https://warpcast.com" target="_blank" rel="noreferrer">Farcaster</a> — social</li>
        </ul>
        <div style={{marginTop:16}} className="small">
          Coming soon: Cast‑to‑Checkout, Arena Bets, Yez Vault.
        </div>
      </div>
    </section>
  )
}
