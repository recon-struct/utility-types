import { describe, expectTypeOf, it } from 'vitest'
import { IsGreaterThanOrEqual } from './is-greater-than-or-equal'

describe('IsGreaterThanOrEqual', () => {
  it('should equal false', () => {
    expectTypeOf<IsGreaterThanOrEqual<1, 2>>().toEqualTypeOf<false>()
  })
  it('should equal true', () => {
    expectTypeOf<IsGreaterThanOrEqual<2, 1>>().toEqualTypeOf<true>()
  })
  it('should equal true', () => {
    expectTypeOf<IsGreaterThanOrEqual<1, 1>>().toEqualTypeOf<true>()
  })
})
