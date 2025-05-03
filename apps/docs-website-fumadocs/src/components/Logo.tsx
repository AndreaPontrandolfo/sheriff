import Image from 'next/image';

export function Logo({ size = 24 }: { size?: number }) {
  return (
    <Image src="/icon.svg" alt="Logo" width={size} height={size} priority />
  );
}
