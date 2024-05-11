import { describe, expectTypeOf, it } from 'vitest'
import { IsNonNegative } from './is-non-negative'

describe('IsNonNegative', () => {
  it('should return true for positive numbers', () => {
    expectTypeOf<IsNonNegative<1>>().toEqualTypeOf<true>()
  })

  it('should return false for negative numbers', () => {
    expectTypeOf<IsNonNegative<-1>>().toEqualTypeOf<false>()
  })

  it('should return true for 0', () => {
    expectTypeOf<IsNonNegative<0>>().toEqualTypeOf<true>()
  })
})
