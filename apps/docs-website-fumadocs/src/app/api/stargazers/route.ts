import { type NextRequest, NextResponse } from 'next/server';
import { getStargazers } from '@/lib/getStargazer';

export const revalidate = 10; // revalidate every 10 seconds

export const GET = async (req: NextRequest) => {
  const data = await getStargazers({
    owner: 'AndreaPontrandolfo',
    repo: 'sheriff',
  }).catch(console.error);

  return NextResponse.json(data);
};
