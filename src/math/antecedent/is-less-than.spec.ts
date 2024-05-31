import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/expect'
import type { IsLessThan } from './is-less-than'

describe('IsLessThan', () => {
  it('should return true if A is less than B', () => {
    type Ex1 = IsLessThan<1, 2>
    type Ex2 = IsLessThan<1, 2n>
    type Ex3 = IsLessThan<1n, 2>
    type Ex4 = IsLessThan<1n, 2n>

    type TestEx1 = Expect<IsEqual<Ex1, true>>
    type TestEx2 = Expect<IsEqual<Ex2, true>>
    type TestEx3 = Expect<IsEqual<Ex3, true>>
    type TestEx4 = Expect<IsEqual<Ex4, true>>
  })

  it('should return false if A is greater than B', () => {
    type Ex1 = IsLessThan<2, 1>
    type Ex2 = IsLessThan<2, 1n>
    type Ex3 = IsLessThan<2n, 1>
    type Ex4 = IsLessThan<2n, 1n>

    type TestEx1 = Expect<IsEqual<Ex1, false>>
    type TestEx2 = Expect<IsEqual<Ex2, false>>
    type TestEx3 = Expect<IsEqual<Ex3, false>>
    type TestEx4 = Expect<IsEqual<Ex4, false>>
  })

  it('should return false if A is equal to B', () => {
    type Ex1 = IsLessThan<1, 1>
    type Ex2 = IsLessThan<1, 1n>
    type Ex3 = IsLessThan<1n, 1>
    type Ex4 = IsLessThan<1n, 1n>

    type TestEx1 = Expect<IsEqual<Ex1, false>>
    type TestEx2 = Expect<IsEqual<Ex2, false>>
    type TestEx3 = Expect<IsEqual<Ex3, false>>
    type TestEx4 = Expect<IsEqual<Ex4, false>>
  })
})
