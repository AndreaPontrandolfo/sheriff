import { Image } from '@unpic/react';

interface LogoProps {
  size?: number;
}
export function Logo({ size = 24 }: LogoProps) {
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
