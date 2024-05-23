import { describe, it } from 'bun:test'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'
import type { IsNegative } from '~/math/antecedent/is-negative'

describe('IsNegative', () => {
  it('should return true for negative numbers', () => {
    type TestIsNegative = Expect<IsEqual<IsNegative<-1>, true>>
  })

  it('should return false for positive numbers', () => {
    type TestIsNegative = Expect<IsEqual<IsNegative<1>, false>>
  })

  it('should return false for 0', () => {
    type TestIsNegative = Expect<IsEqual<IsNegative<0>, false>>
  })
})
