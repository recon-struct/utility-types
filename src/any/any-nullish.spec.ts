import type { AnyNullish } from '~/any/any-nullish'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/expect'

describe('AnyNullish', () => {
  it('should equal null | undefined', () => {
    type Ex = AnyNullish

    type TestEx = Expect<IsEqual<Ex, null | undefined>>
  })
})
