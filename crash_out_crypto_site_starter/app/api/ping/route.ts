import { NextResponse } from 'next/server';

export async function GET(){
  return NextResponse.json({ ok: true, name: process.env.NEXT_PUBLIC_PROJECT_NAME || 'Crash_Out_Crypto' });
}
