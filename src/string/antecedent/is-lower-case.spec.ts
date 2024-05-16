import { describe, expectTypeOf, it } from 'vitest'
import type { IsLowerCase } from '~/string/antecedent/is-lower-case'

describe('IsLowerCase', () => {
  it('should return true if `A` is lowercase', () => {
    type Ex1 = IsLowerCase<'a'>
    type Ex2 = IsLowerCase<'abc'>

    expectTypeOf<Ex1>().toEqualTypeOf<true>()
    expectTypeOf<Ex2>().toEqualTypeOf<true>()
  })

  it('should return false if `A` is not lowercase', () => {
    type Ex1 = IsLowerCase<'A'>
    type Ex2 = IsLowerCase<'Abc'>

    expectTypeOf<Ex1>().toEqualTypeOf<false>()
    expectTypeOf<Ex2>().toEqualTypeOf<false>()
  })
})
