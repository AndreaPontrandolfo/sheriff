export const allJsExtensions = 'js,mjs,cjs,ts,mts,cts';
export const allJsxExtensions = 'jsx,tsx,mtsx,mjsx';

export const supportedFileTypes = `**/*{${allJsExtensions},${allJsxExtensions},astro}`;

export const messages = {
  NO_ACCESS_MODIFIER:
    'Avoid access modifiers. In Javascript modules there is no need to limit developer access to properties.',
};

export const ignores = [
  '**/node_modules/**',
  '.git/**',
  '**/dist/**',
  '**/build/**',
  '**/artifacts/**',
  '**/coverage/**',
  'eslint.config.js', // we currently cannot lint the eslint.config.js itself. It is currently only provided as a .js file and this config currently only supports .ts files. Therefore, eslint.config.js can only be re-enabled once this config support pure .js files too, or the ESLint team support the eslint.config.ts file.
];

export const baseNoRestrictedSyntaxRules = [
  {
    selector: 'LabeledStatement',
    message:
      'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
  },
  {
    selector: 'ForInStatement',
    message:
      'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
  },
  {
    selector: "Identifier[name='Reflect']",
    message:
      'Avoid the Reflect API. It is a very low-level feature that has only rare and specific use-cases if building complex and hacky libraries. There is no need to use this feature for any kind of normal development.',
  },
  {
    selector: "BinaryExpression[operator='in']",
    message:
      "Avoid the 'in' operator. In real-world scenarios there is rarely a need for this operator. For most usecases, basic property access is all you need. For every other case, use the Object.hasOwn() or the Object.prototype.hasOwnProperty() method. In the really niche cases where you actually need to check for the existence of a property both in the object itself AND in it's prototype chain, feel free to disable this rule with the inline eslint-disable syntax.",
  },
  {
    selector: "PropertyDefinition[accessibility='public']",
    message: messages.NO_ACCESS_MODIFIER,
  },
  {
    selector: "PropertyDefinition[accessibility='protected']",
    message: messages.NO_ACCESS_MODIFIER,
  },
  {
    selector: "PropertyDefinition[accessibility='private']",
    message: messages.NO_ACCESS_MODIFIER,
  },
  {
    selector: "Identifier[name='PropTypes']",
    message: 'Avoid PropTypes. Use Typescript instead.',
  },
  {
    selector: "Identifier[name='propTypes']",
    message: 'Avoid PropTypes. Use Typescript instead.',
  },
  {
    selector: 'TSEnumDeclaration',
    message: 'Avoid enums.',
  },
];
