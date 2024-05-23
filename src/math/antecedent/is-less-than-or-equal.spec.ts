import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'
import type { IsLessThanOrEqual } from '~/math/antecedent/is-less-than-or-equal'

describe('IsLessThanOrEqual', () => {
  it('should equal false', () => {
    type TestIsLessThanOrEqual = Expect<IsEqual<IsLessThanOrEqual<1, 0>, false>>
  })
  it('should equal true', () => {
    type TestIsLessThanOrEqual = Expect<IsEqual<IsLessThanOrEqual<0, 1>, true>>
  })
  it('should equal true', () => {
    type TestIsLessThanOrEqual = Expect<IsEqual<IsLessThanOrEqual<0, 0>, true>>
  })
})
