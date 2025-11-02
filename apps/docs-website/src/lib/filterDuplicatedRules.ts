import { isEqual } from 'lodash-es';
import type { Entry } from '@sherifforg/types';
import { removeElementFromArrayByValue } from './removeElementFromArrayByValue';

const isSameItem = (firstOccurrence: Entry, secondOccurrence: Entry) => {
  return (
    isEqual(firstOccurrence.ruleOptions, secondOccurrence.ruleOptions) &&
    isEqual(firstOccurrence.affectedFiles, secondOccurrence.affectedFiles)
  );
};

/**
 * Sometimes in the config there are duplicated rules declarations. When it's found a rule with same ruleOptions and same affectedFiles, we filter it out and keep the latest found.
 */
export const filterDuplicateRules = (rules: Entry[]): Entry[] => {
  const alreadyFoundOccurrences: Entry[] = [];

  for (const currentRule of rules) {
    // TODO: this is O(n^2), it is probably slow and should be optimized, either with Map or object lookup
    const ruleWithSameName = alreadyFoundOccurrences.find(
      (occurrence) => occurrence.ruleName === currentRule.ruleName,
    );

    if (ruleWithSameName && isSameItem(ruleWithSameName, currentRule)) {
      removeElementFromArrayByValue(alreadyFoundOccurrences, ruleWithSameName);
    }

    alreadyFoundOccurrences.push(currentRule);
  }

  return alreadyFoundOccurrences;
};
