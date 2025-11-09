import store from '@/content/store.json';

function StoreCard({item}:{item: any}){
  return (
    <a className="card" href={item.url} target="_blank" rel="noreferrer">
      <img src={item.img} width={64} height={64} alt="" style={{borderRadius:12, marginBottom:12}}/>
      <h3 style={{marginBottom:6}}>{item.title}</h3>
      <div style={{color:'var(--muted)', marginBottom:12}}>{item.blurb}</div>
      <div className="small mono">{item.type === 'zora' ? 'ZORA MINT' : 'EXTERNAL'}</div>
    </a>
  )
}

export default function StorePage(){
  const items = (store.items || []) as any[];

  const envItems = typeof process.env.NEXT_PUBLIC_ZORA_ITEMS === 'string'
    ? process.env.NEXT_PUBLIC_ZORA_ITEMS.split(',').map((u, i) => ({
        title: `Zora Mint #${i+1}`,
        type: 'zora',
        url: u.trim(),
        blurb: 'Onchain collectible',
        img: '/logo.svg'
      }))
    : [];

  const all = [...envItems, ...items];

  return (
    <section>
      <h1>Store</h1>
      <p style={{color:'var(--muted)'}}>Digital goods, mints, and canon badges.</p>
      <div className="grid" style={{marginTop:16}}>
        {all.map((it, idx) => <StoreCard key={idx} item={it}/>)}
      </div>
    </section>
  )
}
