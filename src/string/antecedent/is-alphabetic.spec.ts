import { describe, expectTypeOf, it } from 'vitest'
import type { IsAlphabetic } from '~/string/antecedent/is-alphabetic'

describe('IsAlphabetic', () => {
  it('should be true if the string is alphabetic', () => {
    type Ex1 = IsAlphabetic<'abc'>
    type Ex2 = IsAlphabetic<'ABC'>
    type Ex3 = IsAlphabetic<'aBc'>

    expectTypeOf<Ex1>().toEqualTypeOf<true>()
    expectTypeOf<Ex2>().toEqualTypeOf<true>()
    expectTypeOf<Ex3>().toEqualTypeOf<true>()
  })

  it('should be false if the string is not alphabetic', () => {
    type Ex1 = IsAlphabetic<'123'>
    type Ex2 = IsAlphabetic<'abc123'>
    type Ex3 = IsAlphabetic<'abc123abc'>
    type Ex4 = IsAlphabetic<'-123'>
    type Ex5 = IsAlphabetic<'abc123-abc'>

    expectTypeOf<Ex1>().toEqualTypeOf<false>()
    expectTypeOf<Ex2>().toEqualTypeOf<false>()
    expectTypeOf<Ex3>().toEqualTypeOf<false>()
    expectTypeOf<Ex4>().toEqualTypeOf<false>()
    expectTypeOf<Ex5>().toEqualTypeOf<false>()
  })
})
