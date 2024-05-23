import { describe, it } from 'bun:test'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'
import type { IsNonNegative } from '~/math/antecedent/is-non-negative'

describe('IsNonNegative', () => {
  it('should return true for positive numbers', () => {
    type TestIsNonNegative = Expect<IsEqual<IsNonNegative<1>, true>>
  })

  it('should return false for negative numbers', () => {
    type TestIsNonNegative = Expect<IsEqual<IsNonNegative<-1>, false>>
  })

  it('should return true for 0', () => {
    type TestIsNonNegative = Expect<IsEqual<IsNonNegative<0>, true>>
  })
})
