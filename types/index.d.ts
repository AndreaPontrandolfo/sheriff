interface SheriffOptions {
  /**
   * react support
   */
  react?: boolean;
  /**
   * lodash support
   */
  lodash?: boolean;
  /**
   * next support
   */
  next?: boolean;
  /**
   * playwright support
   */
  playwright?: boolean;
  /**
   * jest support
   */
  jest?: boolean;
  /**
   * vitest support. Uses eslint-plugin-jest
   */
  vitest?: boolean;
  /**
   * If you have multiple tsconfig.json files in your project (like tsconfig.json, tsconfig.eslint.json, tsconfig.node.json, etc...) you can specify which config Sheriff will pickup with the customTSConfigPath option
   */
  customTSConfigPath?: string;
  /**
   * this setting accepts an array of filepaths, dictaced by minimatch syntax. Only the matching files found in this array will be linted
   */
  files?: string[];
}

export function sheriff(options: SheriffOptions): Record<string, any>[];
