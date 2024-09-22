import { Struct } from 'superstruct';

declare global {
  namespace PlaywrightTest {
    interface Matchers<R> {
      toHaveSchema(schema: Struct): R;
    }
  }
}
