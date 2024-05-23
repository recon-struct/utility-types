import type { AnyStringish } from '~/any/any-stringish'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'

describe('AnyStringish', () => {
  it('should be a union of all TypeScript type that can be coercedto a string easily.', () => {
    type Ex = AnyStringish

    type TestEx = Expect<
      IsEqual<Ex, string | number | bigint | boolean | null | undefined>
    >
  })
})
