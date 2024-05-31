import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/expect'
import type { IsCapitalized } from '~/string/antecedent/is-capitalized'

describe('IsCapitalized', () => {
  it('should return true if `A` is capitalized', () => {
    type Ex1 = IsCapitalized<'A'>
    type Ex2 = IsCapitalized<'Abc'>

    type TestEx1 = Expect<IsEqual<Ex1, true>>
    type TestEx2 = Expect<IsEqual<Ex2, true>>
  })

  it('should return false if `A` is not capitalized', () => {
    type Ex1 = IsCapitalized<'a'>
    type Ex2 = IsCapitalized<'abc'>

    type TestEx1 = Expect<IsEqual<Ex1, false>>
    type TestEx2 = Expect<IsEqual<Ex2, false>>
  })
})
