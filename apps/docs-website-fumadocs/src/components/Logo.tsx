import Image from 'next/image';

export function Logo() {
  return <Image src="/icon.svg" alt="Logo" width={24} height={24} priority />;
}
