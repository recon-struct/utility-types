import { describe, expectTypeOf, it } from 'vitest'
import type { IsPositive } from '~/math/antecedent/is-positive'

describe('IsPositive', () => {
  it('should return true for positive numbers', () => {
    expectTypeOf<IsPositive<1>>().toEqualTypeOf<true>()
  })

  it('should return false for negative numbers', () => {
    expectTypeOf<IsPositive<-1>>().toEqualTypeOf<false>()
  })

  it('should return false for 0', () => {
    expectTypeOf<IsPositive<0>>().toEqualTypeOf<false>()
  })
})
