import { describe, expectTypeOf, it } from 'vitest'
import type { IsUpperCase } from '~/string/antecedent/is-upper-case'

describe('IsUpperCase', () => {
  it('should return true if `A` is uppercase', () => {
    type Ex1 = IsUpperCase<'A'>
    type Ex2 = IsUpperCase<'ABC'>

    expectTypeOf<Ex1>().toEqualTypeOf<true>()
    expectTypeOf<Ex2>().toEqualTypeOf<true>()
  })

  it('should return false if `A` is not uppercase', () => {
    type Ex1 = IsUpperCase<'a'>
    type Ex2 = IsUpperCase<'abc'>

    expectTypeOf<Ex1>().toEqualTypeOf<false>()
    expectTypeOf<Ex2>().toEqualTypeOf<false>()
  })
})
