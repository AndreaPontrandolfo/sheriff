'use client';
import { AnimatedNumber } from '@/components/AnimatedNumber';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';

export type AnimatedNumberInViewProps = {
  number: number;
  durationInMilliseconds?: number;
};

export const AnimatedNumberInView = ({
  number,
  durationInMilliseconds,
}: AnimatedNumberInViewProps) => {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);

  if (isInView && value === 0) {
    setValue(number);
  }

  return (
    <span ref={ref}>
      <AnimatedNumber
        springOptions={{
          bounce: 0,
          duration: durationInMilliseconds ?? 1000,
        }}
        value={value}
      />
    </span>
  );
};
