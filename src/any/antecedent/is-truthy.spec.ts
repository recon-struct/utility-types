import type { IsTruthy } from '~/any/antecedent/is-truthy'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/expect'

describe('IsTruthy', () => {
  it('should return true if A extends true', () => {
    type Ex1 = IsTruthy<true>
    type Ex2 = IsTruthy<1>
    type Ex3 = IsTruthy<'a'>
    type Ex4 = IsTruthy<{}>
    type Ex5 = IsTruthy<[]>

    type TestEx1 = Expect<IsEqual<Ex1, true>>
    type TestEx2 = Expect<IsEqual<Ex2, true>>
    type TestEx3 = Expect<IsEqual<Ex3, true>>
    type TestEx4 = Expect<IsEqual<Ex4, true>>
    type TestEx5 = Expect<IsEqual<Ex5, true>>
  })

  it('should return false if A does not extend true', () => {
    type Ex1 = IsTruthy<false>
    type Ex2 = IsTruthy<0>
    type Ex3 = IsTruthy<''>
    type Ex4 = IsTruthy<null>
    type Ex5 = IsTruthy<undefined>
    type Ex6 = IsTruthy<never>

    type TestEx1 = Expect<IsEqual<Ex1, false>>
    type TestEx2 = Expect<IsEqual<Ex2, false>>
    type TestEx3 = Expect<IsEqual<Ex3, false>>
    type TestEx4 = Expect<IsEqual<Ex4, false>>
    type TestEx5 = Expect<IsEqual<Ex5, false>>
    type TestEx6 = Expect<IsEqual<Ex6, false>>
  })

  it('should return boolean if A is a union that extends true', () => {
    type Ex1 = IsTruthy<true | false>
    type Ex2 = IsTruthy<1 | 0>
    type Ex3 = IsTruthy<'a' | ''>
    type Ex4 = IsTruthy<{} | null>
    type Ex5 = IsTruthy<[] | undefined>

    type TestEx1 = Expect<IsEqual<Ex1, boolean>>
    type TestEx2 = Expect<IsEqual<Ex2, boolean>>
    type TestEx3 = Expect<IsEqual<Ex3, boolean>>
    type TestEx4 = Expect<IsEqual<Ex4, boolean>>
    type TestEx5 = Expect<IsEqual<Ex5, boolean>>
  })
})
