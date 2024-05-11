import { describe, expectTypeOf, it } from 'vitest'
import { IsLessThan } from './is-less-than'

describe('IsLessThan', () => {
  it('should equal false', () => {
    expectTypeOf<IsLessThan<1, 0>>().toEqualTypeOf<false>()
  })
  it('should equal true', () => {
    expectTypeOf<IsLessThan<0, 1>>().toEqualTypeOf<true>()
  })
  it('should equal false', () => {
    expectTypeOf<IsLessThan<0, 0>>().toEqualTypeOf<false>()
  })
})
