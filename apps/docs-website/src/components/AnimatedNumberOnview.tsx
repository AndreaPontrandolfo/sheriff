'use client';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { AnimatedNumber } from '@/components/AnimatedNumber';

export interface AnimatedNumberInViewProps {
  number: number;
  durationInMilliseconds?: number;
}

export function AnimatedNumberInView({
  number,
  durationInMilliseconds,
}: AnimatedNumberInViewProps) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);

  if (isInView && value === 0) {
    setValue(number);
  }

  return (
    <span ref={ref}>
      <AnimatedNumber
        value={value}
        springOptions={{
          bounce: 0,
          duration: durationInMilliseconds ?? 1000,
        }}
      />
    </span>
  );
}
