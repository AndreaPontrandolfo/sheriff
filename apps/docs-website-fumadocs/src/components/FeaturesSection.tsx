import React from 'react';
import { useId } from 'react';
import { Marquee } from './magicui/marquee';

const features = [
  {
    title: 'Preconfigured ignores',
    description:
      'Comes prepackaged with commonly ignored paths and respects your .gitignore file.',
  },
  {
    title: 'Batteries included',
    description:
      'All-in-one solution with everything included. No need to install or configure anything separately.',
  },
  {
    title: 'No lock-in',
    description:
      'Extended capabilities beyond a simple ESLint config, but not a framework. Extend or disable rules as needed.',
  },
  {
    title: 'Meets you where you are at',
    description:
      'Formatting agnostic with no style restrictions. Works perfectly with Prettier or without it.',
  },
  {
    title: 'Frictionless by design',
    description:
      'Setup with a single command that automatically infers project details for optimal configuration.',
  },
  {
    title: 'Interoperability',
    description:
      'Install at any point in your project. The setup command configures everything automatically.',
  },
  {
    title: 'Cutting-edge',
    description:
      'Early adopter of the new eslint FlatConfig format. Easily migrate your project without effort.',
  },
  {
    title: 'Sensible',
    description:
      'Hand-picked rules to prevent real-world production issues and ensure style consistency. No bloat.',
  },
  {
    title: 'Typesafe',
    description: 'Configuration file can be fully typesafe.',
  },
  {
    title: 'Configurable',
    description: 'Fully configurable with its own config object.',
  },
  {
    title: 'Modular',
    description: 'Opt-in support for a wide array of libraries.',
  },
  {
    title: 'Extensible',
    description:
      'Designed for easy extension. Add your own rules, plugins, and configurations with minimal effort.',
  },
  {
    title: 'Best practices',
    description: 'Built around the best practices of the JavaScript ecosystem.',
  },
  {
    title: 'Incrementally adoptable',
    description: 'Can be adopted incrementally with the "files" filter.',
  },
  {
    title: 'Comprehensive',
    description: 'Supports up to 10 different technologies.',
  },
];

const rowSize = Math.ceil(features.length / 3);
const firstRow = features.slice(0, rowSize);
const secondRow = features.slice(rowSize, rowSize * 2);
const thirdRow = features.slice(rowSize * 2);

export function FeaturesSection() {
  return (
    <div className="relative py-20 lg:py-40">
      <Marquee pauseOnHover className="[--duration:80s]">
        {firstRow.map((feature) => (
          <div
            key={feature.title}
            className="relative min-h-48 max-w-64 overflow-hidden rounded-3xl bg-gradient-to-b from-neutral-100 to-white p-6 dark:from-neutral-900 dark:to-neutral-950"
          >
            <Grid size={20} />
            <p className="relative z-20 text-base font-bold text-neutral-800 dark:text-white">
              {feature.title}
            </p>
            <p className="relative z-20 mt-4 text-base font-normal text-neutral-600 dark:text-neutral-400">
              {feature.description}
            </p>
          </div>
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:80s]">
        {secondRow.map((feature) => (
          <div
            key={feature.title}
            className="relative min-h-48 max-w-64 overflow-hidden rounded-3xl bg-gradient-to-b from-neutral-100 to-white p-6 dark:from-neutral-900 dark:to-neutral-950"
          >
            <Grid size={20} />
            <p className="relative z-20 text-base font-bold text-neutral-800 dark:text-white">
              {feature.title}
            </p>
            <p className="relative z-20 mt-4 text-base font-normal text-neutral-600 dark:text-neutral-400">
              {feature.description}
            </p>
          </div>
        ))}
      </Marquee>
      <Marquee pauseOnHover className="[--duration:80s]">
        {thirdRow.map((feature) => (
          <div
            key={feature.title}
            className="relative min-h-48 max-w-64 overflow-hidden rounded-3xl bg-gradient-to-b from-neutral-100 to-white p-6 dark:from-neutral-900 dark:to-neutral-950"
          >
            <Grid size={20} />
            <p className="relative z-20 text-base font-bold text-neutral-800 dark:text-white">
              {feature.title}
            </p>
            <p className="relative z-20 mt-4 text-base font-normal text-neutral-600 dark:text-neutral-400">
              {feature.description}
            </p>
          </div>
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  );
}

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-100/30 to-zinc-300/30 opacity-100 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 dark:to-zinc-900/30">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full fill-black/10 stroke-black/10 mix-blend-overlay dark:fill-white/10 dark:stroke-white/10"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
