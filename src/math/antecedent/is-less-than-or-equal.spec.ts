import { describe, expectTypeOf, it } from 'vitest'
import { IsLessThanOrEqual } from './is-less-than-or-equal'

describe('IsLessThanOrEqual', () => {
  it('should equal false', () => {
    expectTypeOf<IsLessThanOrEqual<1, 0>>().toEqualTypeOf<false>()
  })
  it('should equal true', () => {
    expectTypeOf<IsLessThanOrEqual<0, 1>>().toEqualTypeOf<true>()
  })
  it('should equal true', () => {
    expectTypeOf<IsLessThanOrEqual<0, 0>>().toEqualTypeOf<true>()
  })
})
