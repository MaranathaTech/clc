import { NextRequest, NextResponse } from 'next/server';
import { getRandomCompliment } from '@/lib/compliments';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name } = body;

  const compliment = getRandomCompliment(name);

  await new Promise((resolve) => setTimeout(resolve, 800));

  return NextResponse.json({ compliment });
}
