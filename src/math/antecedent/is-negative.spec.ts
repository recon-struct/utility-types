import { describe, expectTypeOf, it } from 'vitest'
import type { IsNegative } from '~/math/antecedent/is-negative'

describe('IsNegative', () => {
  it('should return true for negative numbers', () => {
    expectTypeOf<IsNegative<-1>>().toEqualTypeOf<true>()
  })

  it('should return false for positive numbers', () => {
    expectTypeOf<IsNegative<1>>().toEqualTypeOf<false>()
  })

  it('should return false for 0', () => {
    expectTypeOf<IsNegative<0>>().toEqualTypeOf<false>()
  })
})
