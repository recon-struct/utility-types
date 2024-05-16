import { describe, expectTypeOf, it } from 'vitest'
import type { IsCapitalized } from '~/string/antecedent/is-capitalized'

describe('IsCapitalized', () => {
  it('should return true if `A` is capitalized', () => {
    type Ex1 = IsCapitalized<'A'>
    type Ex2 = IsCapitalized<'Abc'>

    expectTypeOf<Ex1>().toEqualTypeOf<true>()
    expectTypeOf<Ex2>().toEqualTypeOf<true>()
  })

  it('should return false if `A` is not capitalized', () => {
    type Ex1 = IsCapitalized<'a'>
    type Ex2 = IsCapitalized<'abc'>

    expectTypeOf<Ex1>().toEqualTypeOf<false>()
    expectTypeOf<Ex2>().toEqualTypeOf<false>()
  })
})
