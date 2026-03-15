import { Image } from '@unpic/react';

export function Logo({ size = 24 }: { size?: number }) {
  return (
    <Image
      priority
      alt="Logo"
      height={size}
      layout="fixed"
      src="/icon.svg"
      width={size}
    />
  );
}
