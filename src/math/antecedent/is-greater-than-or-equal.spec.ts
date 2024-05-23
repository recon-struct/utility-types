import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'
import type { IsGreaterThanOrEqual } from '~/math/antecedent/is-greater-than-or-equal'

describe('IsGreaterThanOrEqual', () => {
  it('should equal false', () => {
    type TestIsGreaterThanOrEqual = Expect<
      IsEqual<IsGreaterThanOrEqual<1, 2>, false>
    >
  })
  it('should equal true', () => {
    type TestIsGreaterThanOrEqual = Expect<
      IsEqual<IsGreaterThanOrEqual<2, 1>, true>
    >
  })
  it('should equal true', () => {
    type TestIsGreaterThanOrEqual = Expect<
      IsEqual<IsGreaterThanOrEqual<1, 1>, true>
    >
  })
})
