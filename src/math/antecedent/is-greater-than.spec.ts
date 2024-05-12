import { describe, expectTypeOf, it } from 'vitest'
import type { IsGreaterThan } from '~/math/antecedent/is-greater-than'

describe('IsGreaterThan', () => {
  it('should equal false', () => {
    expectTypeOf<IsGreaterThan<1, 2>>().toEqualTypeOf<false>()
  })
  it('should equal true', () => {
    expectTypeOf<IsGreaterThan<2, 1>>().toEqualTypeOf<true>()
  })
  it('should equal false', () => {
    expectTypeOf<IsGreaterThan<1, 1>>().toEqualTypeOf<false>()
  })
})
