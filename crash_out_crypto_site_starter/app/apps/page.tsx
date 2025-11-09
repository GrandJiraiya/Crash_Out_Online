import Link from 'next/link';

export default function AppsPage(){
  return (
    <section>
      <h1>Apps</h1>
      <p style={{color:'var(--muted)'}}>Mini‑apps and dapps you can run right here.</p>
      <div className="grid" style={{marginTop:16}}>
        <div className="card">
          <h3>Cast‑to‑Checkout</h3>
          <p style={{color:'var(--muted)'}}>Farcaster post → instant mint/checkout. Coming soon.</p>
          <code className="mono small">/api/ctc/checkout — stub</code>
        </div>
        <div className="card">
          <h3>Yezmir Vault</h3>
          <p style={{color:'var(--muted)'}}>Stake + puzzle gates. (Placeholder)</p>
          <Link className="btn" href="#">Open (soon)</Link>
        </div>
      </div>
    </section>
  )
}
