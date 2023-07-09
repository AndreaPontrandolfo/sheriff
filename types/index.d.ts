interface SheriffOptions {
  react?: boolean;
  lodash?: boolean;
  next?: boolean;
  playwright?: boolean;
  jest?: boolean;
  vitest?: boolean;
  customTSConfigPath?: string;
  files?: string[];
}

export function sheriff(options: SheriffOptions): Record<string, any>[];
