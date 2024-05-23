import { describe, it } from 'bun:test'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'
import type { IsAlphabetic } from '~/string/antecedent/is-alphabetic'

describe('IsAlphabetic', () => {
  it('should be true if the string is alphabetic', () => {
    type Ex1 = IsAlphabetic<'abc'>
    type Ex2 = IsAlphabetic<'ABC'>
    type Ex3 = IsAlphabetic<'aBc'>

    type TestEx1 = Expect<IsEqual<Ex1, true>>
    type TestEx2 = Expect<IsEqual<Ex2, true>>
    type TestEx3 = Expect<IsEqual<Ex3, true>>
  })

  it('should be false if the string is not alphabetic', () => {
    type Ex1 = IsAlphabetic<'123'>
    type Ex2 = IsAlphabetic<'abc123'>
    type Ex3 = IsAlphabetic<'abc123abc'>
    type Ex4 = IsAlphabetic<'-123'>
    type Ex5 = IsAlphabetic<'abc123-abc'>

    type TestEx1 = Expect<IsEqual<Ex1, false>>
    type TestEx2 = Expect<IsEqual<Ex2, false>>
    type TestEx3 = Expect<IsEqual<Ex3, false>>
    type TestEx4 = Expect<IsEqual<Ex4, false>>
    type TestEx5 = Expect<IsEqual<Ex5, false>>
  })
})
