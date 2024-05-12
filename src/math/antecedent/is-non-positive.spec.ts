import { describe, expectTypeOf, it } from 'vitest'
import type { IsNonPositive } from '~/math/antecedent/is-non-positive'

describe('IsNonPositive', () => {
  it('should return true for negative numbers', () => {
    expectTypeOf<IsNonPositive<-1>>().toEqualTypeOf<true>()
  })

  it('should return true for 0', () => {
    expectTypeOf<IsNonPositive<0>>().toEqualTypeOf<true>()
  })

  it('should return false for positive numbers', () => {
    expectTypeOf<IsNonPositive<1>>().toEqualTypeOf<false>()
  })
})
