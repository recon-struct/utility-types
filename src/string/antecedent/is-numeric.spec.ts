import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'
import type { IsNumeric } from '~/string/antecedent/is-numeric'

describe('IsNumeric', () => {
  it('should be true if the string is numeric', () => {
    type Ex1 = IsNumeric<'123'>
    type Ex2 = IsNumeric<'0'>

    type TestEx1 = Expect<IsEqual<Ex1, true>>
    type TestEx2 = Expect<IsEqual<Ex2, true>>
  })

  it('should be false if the string is not numeric', () => {
    type Ex1 = IsNumeric<'123a'>
    type Ex2 = IsNumeric<'abc'>
    type Ex3 = IsNumeric<'abc123'>
    type Ex4 = IsNumeric<'abc123abc'>
    type Ex5 = IsNumeric<'-123'>

    type TestEx1 = Expect<IsEqual<Ex1, false>>
    type TestEx2 = Expect<IsEqual<Ex2, false>>
    type TestEx3 = Expect<IsEqual<Ex3, false>>
    type TestEx4 = Expect<IsEqual<Ex4, false>>
    type TestEx5 = Expect<IsEqual<Ex5, false>>
  })
})
