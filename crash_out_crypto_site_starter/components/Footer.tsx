export function Footer(){
  return (
    <footer>
      <div className="container" style={{display:'flex', gap:12, alignItems:'center', justifyContent:'space-between', padding:'24px 0'}}>
        <div className="small">© {new Date().getFullYear()} Crash_Out_Crypto • Built for Base</div>
        <div className="small mono">CrashOutCrypto.dev</div>
      </div>
    </footer>
  )
}
