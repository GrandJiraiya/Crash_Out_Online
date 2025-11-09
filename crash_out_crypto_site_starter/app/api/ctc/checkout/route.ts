import { NextResponse } from 'next/server';

/**
 * Cast‑to‑Checkout stub.
 * Expect body: { castUrl: string, itemUrl?: string, address?: `0x${string}` }
 * TODO: verify cast, fetch metadata, construct checkout/mint intent.
 */
export async function POST(req: Request){
  try{
    const body = await req.json();
    return NextResponse.json({
      ok: true,
      received: body,
      message: "CTC stub reached — wire up Farcaster + Zora next."
    });
  } catch (e:any){
    return NextResponse.json({ ok:false, error: e?.message || 'Bad JSON' }, { status: 400 });
  }
}
