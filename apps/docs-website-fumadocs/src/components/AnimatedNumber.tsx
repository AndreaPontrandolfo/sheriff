'use client';
import {
  motion,
  type SpringOptions,
  useSpring,
  useTransform,
} from 'motion/react';
import { useEffect } from 'react';

export type AnimatedNumberProps = {
  value: number;
  className?: string;
  springOptions?: SpringOptions;
  as?: React.ElementType;
};

export function AnimatedNumber({
  value,
  className,
  springOptions,
  as = 'span',
}: AnimatedNumberProps) {
  const MotionComponent = motion.create(as);

  const spring = useSpring(value, springOptions);
  const display = useTransform(spring, (current) => Math.round(current));

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return <MotionComponent className={className}>{display}</MotionComponent>;
}
