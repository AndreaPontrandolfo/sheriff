const getSheriffConfig = require('../configs/eslint.config.js');
const fs = require('fs');

const config = getSheriffConfig({
  react: true,
  next: true,
  lodash: true,
  playwright: true,
  vitest: true,
});

const printRules = () => {
  const fullRulesList = config
    .map((element) => {
      if (element.rules) {
        return element.rules;
      }
    })
    .filter((element) => {
      if (element) {
        return element;
      }
    });
  let fullRulesListFlattened = {};
  for (const configSlice of fullRulesList) {
    Object.assign(fullRulesListFlattened, configSlice);
  }
  const fullRulesListFlattenedWithTransformedSeverity = {};
  for (let [key, value] of Object.entries(fullRulesListFlattened)) {
    if (value === 'error') {
      fullRulesListFlattenedWithTransformedSeverity[key] = 2;
    }
    if (value === 'warn') {
      fullRulesListFlattenedWithTransformedSeverity[key] = 1;
    }
    if (value === 'off') {
      fullRulesListFlattenedWithTransformedSeverity[key] = 0;
    }
    if (value !== 'error' && value !== 'warn' && value !== 'off') {
      fullRulesListFlattenedWithTransformedSeverity[key] = value;
    }
  }
  fs.writeFileSync(
    'docs/rules.json',
    JSON.stringify(fullRulesListFlattenedWithTransformedSeverity, null, 2),
  );
};

printRules();
