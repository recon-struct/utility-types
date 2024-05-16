import { describe, expectTypeOf, it } from 'vitest'
import type { IsNumeric } from '~/string/antecedent/is-numeric'

describe('IsNumeric', () => {
  it('should be true if the string is numeric', () => {
    type Ex1 = IsNumeric<'123'>
    type Ex2 = IsNumeric<'0'>

    expectTypeOf<Ex1>().toEqualTypeOf<true>()
    expectTypeOf<Ex2>().toEqualTypeOf<true>()
  })

  it('should be false if the string is not numeric', () => {
    type Ex1 = IsNumeric<'123a'>
    type Ex2 = IsNumeric<'abc'>
    type Ex3 = IsNumeric<'abc123'>
    type Ex4 = IsNumeric<'abc123abc'>
    type Ex5 = IsNumeric<'-123'>

    expectTypeOf<Ex1>().toEqualTypeOf<false>()
    expectTypeOf<Ex2>().toEqualTypeOf<false>()
    expectTypeOf<Ex3>().toEqualTypeOf<false>()
    expectTypeOf<Ex4>().toEqualTypeOf<false>()
    expectTypeOf<Ex5>().toEqualTypeOf<false>()
  })
})
