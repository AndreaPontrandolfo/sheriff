import { createLogger, format, transports } from 'winston';
import { consoleFormat } from 'winston-console-format';

export const logger = createLogger({
  level: 'silly',
  format: format.combine(
    format.timestamp(),
    format.errors({ stack: true }),
    format.splat(),
    format.json(),
    format.prettyPrint(),
    format.colorize(),
  ),
  defaultMeta: { service: 'Test' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize({ all: true }),
        format.padLevels(),
        consoleFormat({
          showMeta: true,
          metaStrip: ['timestamp', 'service'],
          inspectOptions: {
            depth: Infinity,
            colors: true,
            maxArrayLength: Infinity,
            breakLength: 40,
            compact: Infinity,
          },
        }),
      ),
    }),
  ],
});

export const unImportantLogger = createLogger({
  level: 'silly',
  format: format.combine(
    format.timestamp(),
    format.errors({ stack: true }),
    format.splat(),
    format.json(),
    format.uncolorize(),
  ),
  defaultMeta: { service: 'Test' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.padLevels(),
        consoleFormat({
          showMeta: true,
          metaStrip: ['timestamp', 'service'],
          inspectOptions: {
            depth: Infinity,
            colors: false,
            maxArrayLength: Infinity,
            breakLength: 120,
            compact: Infinity,
          },
        }),
      ),
    }),
  ],
});
