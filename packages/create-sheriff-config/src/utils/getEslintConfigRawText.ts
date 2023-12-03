import { sheriffStartingOptions } from '../constants';
import { printError } from './printError';
import { setSheriffConfig } from './setSheriffConfig';

export const getEslintConfigRawText = async (
  modulesType: 'esm' | 'commonjs',
): Promise<string> => {
  let sheriffConfig = sheriffStartingOptions;

  try {
    sheriffConfig = await setSheriffConfig();
  } catch (error) {
    printError(
      "Couldn't infer Sheriff user preferences automatically. Setting every option to false...",
      { error },
    );
  }

  const eslintConfigRawText = {
    esm: `import sheriff from 'eslint-config-sheriff';
import { defineFlatConfig } from 'eslint-define-config';

const sheriffOptions = ${JSON.stringify(sheriffConfig, null, 2)};

export default defineFlatConfig([...sheriff(sheriffOptions)]);`,

    commonjs: `const { sheriff } = require('eslint-config-sheriff');
const { defineFlatConfig } = require('eslint-define-config');

const sheriffOptions = ${JSON.stringify(sheriffConfig, null, 2)};

module.exports = defineFlatConfig([...sheriff(sheriffOptions)]);`,
  };

  if (modulesType === 'esm') {
    return eslintConfigRawText.esm;
  }

  return eslintConfigRawText.commonjs;
};
