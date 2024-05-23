import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'
import type { StartsWith } from '~/string/antecedent/starts-with'

describe('StartsWith', () => {
  it('should return true if `A` starts with `B`', () => {
    type Ex1 = StartsWith<'abc', 'a'>
    type Ex2 = StartsWith<'abc', 'ab'>
    type Ex3 = StartsWith<'abc', 'abc'>

    type TestEx1 = Expect<IsEqual<Ex1, true>>
    type TestEx2 = Expect<IsEqual<Ex2, true>>
    type TestEx3 = Expect<IsEqual<Ex3, true>>
  })

  it('should return false if `A` does not start with `B`', () => {
    type Ex1 = StartsWith<'abc', 'b'>
    type Ex2 = StartsWith<'abc', 'bc'>
    type Ex3 = StartsWith<'abc', 'c'>

    type TestEx1 = Expect<IsEqual<Ex1, false>>
    type TestEx2 = Expect<IsEqual<Ex2, false>>
    type TestEx3 = Expect<IsEqual<Ex3, false>>
  })
})
