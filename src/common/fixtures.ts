import { expect as baseExpect, test as baseTest } from '@playwright/test';
import { Struct, assert } from 'superstruct';

export const expect = baseExpect.extend({
  toHaveSchema(payload: object, schema: Struct) {
    const assertionName = 'toHaveSchema';
    let pass: boolean;
    let matcherResult: any;

    try {
      assert(payload, schema);
      pass = true;
    } catch (error) {
      matcherResult = error;
      pass = false;
    }

    const message = pass
      ? () => this.utils.matcherHint(assertionName, undefined, undefined, { isNot: this.isNot })
      : () => this.utils.matcherHint(assertionName, undefined, undefined, { isNot: this.isNot }) +
          `\n\nExpected response body matched with schema but failed, details:\n${matcherResult.message}`;

    return {
      message,
      pass,
    };
  },
});

export const test = baseTest.extend({});
