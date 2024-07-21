/* eslint-disable @typescript-eslint/restrict-template-expressions, playwright/no-conditional-in-test, playwright/require-top-level-describe, vitest/expect-expect, vitest/no-conditional-in-test, vitest/require-top-level-describe */
import { test } from 'vitest';

// Test case 1
test('addition', () => {
  const result = 1 + 2;

  if (result !== 3) {
    throw new Error(`Expected 3, but got ${result}`);
  }
});

// Test case 2
test('subtraction', () => {
  const result = 5 - 2;

  if (result !== 3) {
    throw new Error(`Expected 3, but got ${result}`);
  }
});

// Test case 3
test('multiplication', () => {
  const result = 2 * 2;

  if (result !== 4) {
    throw new Error(`Expected 4, but got ${result}`);
  }
});
