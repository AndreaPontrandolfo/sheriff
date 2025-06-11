import { NextResponse } from 'next/server';
import { getStargazers } from '@/lib/getStargazer';

export /**
 * Revalidate every 10 seconds.
 */
const revalidate = 10;

export const GET = async () => {
  const data = await getStargazers({
    owner: 'AndreaPontrandolfo',
    repo: 'sheriff',
  }).catch(console.error);

  return NextResponse.json(data);
};
