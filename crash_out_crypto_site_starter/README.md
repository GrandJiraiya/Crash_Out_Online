# Crash_Out_Crypto — Web3 Site Starter

A minimal, production‑ready Next.js app with **RainbowKit + Wagmi** pre‑wired for **Base** (mainnet + Sepolia),
a simple **Store** page that can list Zora mints, and stubs for hosting **mini‑apps/dapps** — including a
**Cast‑to‑Checkout** API placeholder.

## 1) Quickstart

```bash
npm i
cp .env.example .env.local
# edit .env.local: add WalletConnect Project ID and optional Zora links
npm run dev
```

Open http://localhost:3000

## 2) What you get

- **Next.js 14 (App Router)** with TypeScript
- **RainbowKit + Wagmi + viem** (Base + Base Sepolia)
- **Pages**: Home (`/`), **Store** (`/store`), **Apps** (`/apps`)
- **API routes**: `/api/ping`, `/api/ctc/checkout` (stub)
- Clean CSS (no Tailwind, easy to add later)
- **Env‑driven** Zora Store items: set `NEXT_PUBLIC_ZORA_ITEMS` as comma‑separated Zora URLs

## 3) Add your products

Two easy paths:

1. **Env list (fastest):** in `.env.local` set
   ```
   NEXT_PUBLIC_ZORA_ITEMS=https://zora.co/collect/base:0x...,https://zora.co/collect/base:0x...
   ```
2. **File‑driven:** edit `content/store.json` to add objects with `title`, `type`, `url`, `blurb`, `img`.

## 4) Deploy to Vercel

1. Push to GitHub
2. **Import** the repo at https://vercel.com/new
3. Set Environment Variables from `.env.example`
4. Deploy

### Connect your domain: `CrashOutCrypto.dev`

- **Register** the domain (lowest‑friction options): Cloudflare Registrar or Namecheap. Point nameservers to Cloudflare if using it.
- In **Vercel → Project → Settings → Domains**, add `crashoutcrypto.dev` and `www.crashoutcrypto.dev`.
- Follow the DNS prompts; if using Cloudflare, set the A/ALIAS/CNAME as directed (Vercel will provision SSL automatically).
- Set `www` → `crashoutcrypto.dev` redirect or vice‑versa as your preferred canonical.

> Tip: `.dev` is HSTS‑preloaded. Always use **HTTPS**.

## 5) Configure wallets & chains

- Create a **WalletConnect** project at https://cloud.walletconnect.com and paste the ID into `NEXT_PUBLIC_WALLETCONNECT_ID`.
- Default chain is **Base**. For testnet, set `NEXT_PUBLIC_DEFAULT_CHAIN=base-sepolia`.

## 6) Cast‑to‑Checkout (next steps)

Wire up `/api/ctc/checkout` to:
- Verify a **Farcaster cast** (Neynar verify → cast metadata)
- Map the cast → **itemUrl** (Zora mint or product checkout)
- Return a **mint/checkout intent** for the front‑end (or complete server‑side)

Suggested libs: Neynar SDK, Zora Creator SDK or direct mint URLs, optional OnchainKit for frame flows.

## 7) Monorepo “apps” (optional)

Create `apps/<your‑app>` folders (Next.js routes or standalone packages) and surface them from `/apps` with minimal glue.

## 8) Branding

Replace `public/logo.svg`, adjust colors in `app/globals.css`, and update copy in `app/page.tsx` & `app/layout.tsx`.

---

**Motto:** WE RISE AT DAWN.
