const config = require('../configs/eslint.config.js');
const fs = require('fs');
const eslintReccomendedRules = require('./eslintReccomendedRules.json');

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
  const fullRulesListFlattened = Object.assign(...fullRulesList);
  const fullRulesListFlattenedWithBase = {
    ...eslintReccomendedRules,
    ...fullRulesListFlattened,
  };
  const fullRulesListFlattenedWithTransformedSeverity = {};
  for (let [key, value] of Object.entries(fullRulesListFlattenedWithBase)) {
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
