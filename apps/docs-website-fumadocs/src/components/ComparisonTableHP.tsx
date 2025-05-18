import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { CheckIcon, XIcon } from 'lucide-react';

const browserDefinitions = [
  { name: 'Chrome' },
  { name: 'Edge' },
  { name: 'Firefox' },
  { name: 'Opera' },
  { name: 'Safari' },
  { name: 'Chrome Android' },
  { name: 'Firefox Android' },
  { name: 'Opera Android' },
  { name: 'Safari iOS' },
  { name: 'Samsung Internet' },
];

const items = [
  {
    feature: 'scroll-timeline',
    browsers: [
      { name: 'Chrome', supported: true },
      { name: 'Edge', supported: true },
      { name: 'Firefox', supported: false },
      { name: 'Opera', supported: true },
      { name: 'Safari', supported: false },
      { name: 'Chrome Android', supported: true },
      { name: 'Firefox Android', supported: false },
      { name: 'Opera Android', supported: true },
      { name: 'Safari iOS', supported: false },
      { name: 'Samsung Internet', supported: true },
    ],
  },
  {
    feature: 'view-timeline',
    browsers: [
      { name: 'Chrome', supported: true },
      { name: 'Edge', supported: true },
      { name: 'Firefox', supported: false },
      { name: 'Opera', supported: true },
      { name: 'Safari', supported: false },
      { name: 'Chrome Android', supported: true },
      { name: 'Firefox Android', supported: false },
      { name: 'Opera Android', supported: true },
      { name: 'Safari iOS', supported: false },
      { name: 'Samsung Internet', supported: true },
    ],
  },
  {
    feature: 'font-size-adjust',
    browsers: [
      { name: 'Chrome', supported: true },
      { name: 'Edge', supported: true },
      { name: 'Firefox', supported: false },
      { name: 'Opera', supported: true },
      { name: 'Safari', supported: true },
      { name: 'Chrome Android', supported: true },
      { name: 'Firefox Android', supported: true },
      { name: 'Opera Android', supported: true },
      { name: 'Safari iOS', supported: true },
      { name: 'Samsung Internet', supported: false },
    ],
  },
];

export default function Component() {
  return (
    <Table>
      <TableHeader>
        <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
          <TableCell></TableCell>
          {browserDefinitions.map((browser) => (
            <TableHead
              key={browser.name}
              className="text-foreground h-auto py-3 align-bottom"
            >
              <span className="relative left-[calc(50%-.5rem)] block rotate-180 whitespace-nowrap leading-4 [text-orientation:sideways] [writing-mode:vertical-rl]">
                {browser.name}
              </span>
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item) => (
          <TableRow
            key={item.feature}
            className="*:border-border [&>:not(:last-child)]:border-r"
          >
            <TableHead className="text-foreground font-medium">
              {item.feature}
            </TableHead>
            {item.browsers.map((browser, index) => (
              <TableCell
                key={`${browser.name}-${index}`}
                className="space-y-1 text-center"
              >
                {browser.supported ? (
                  <CheckIcon
                    className="inline-flex stroke-emerald-600"
                    size={16}
                    aria-hidden="true"
                  />
                ) : (
                  <XIcon
                    className="inline-flex stroke-red-600"
                    size={16}
                    aria-hidden="true"
                  />
                )}
                <span className="sr-only">
                  {browser.supported ? 'Supported' : 'Not supported'}
                </span>
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
