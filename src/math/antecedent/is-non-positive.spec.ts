import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'
import type { IsNonPositive } from '~/math/antecedent/is-non-positive'

describe('IsNonPositive', () => {
  it('should return true for negative numbers', () => {
    type TestIsNonPositive = Expect<IsEqual<IsNonPositive<-1>, true>>
  })

  it('should return true for 0', () => {
    type TestIsNonPositiv = Expect<IsEqual<IsNonPositive<0>, true>>
  })

  it('should return false for positive numbers', () => {
    type TestIsNonPositiv = Expect<IsEqual<IsNonPositive<1>, false>>
  })
})
