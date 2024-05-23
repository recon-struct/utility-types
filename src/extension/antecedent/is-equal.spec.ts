import type { Expect } from '~/helper/test'
import type { IsEqual } from './is-equal'

describe('IsEqual', () => {
  it('should return true if two types are symmetrically equal', () => {
    type A = number
    type B = number
    type Ex = IsEqual<A, B>

    type TestEx = Expect<IsEqual<Ex, true>>
  })

  it('should return false if two types are not symmetrically equal', () => {
    type Ex1 = IsEqual<'hello', string>
    type Ex2 = IsEqual<string, 'hello'>
    type Ex3 = IsEqual<1, number>
    type Ex4 = IsEqual<number, 1n>

    type TestEx1 = Expect<IsEqual<Ex1, false>>
    type TestEx2 = Expect<IsEqual<Ex2, false>>
    type TestEx3 = Expect<IsEqual<Ex3, false>>
    type TestEx4 = Expect<IsEqual<Ex4, false>>
  })
})
