import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/expect'
import type { Add } from './add'

describe('addition', () => {
  it('should add two numbers', () => {
    type Ex1 = Add<0, 1>
    type Ex2 = Add<1, 2>
    type Ex3 = Add<2, 3>
    type Ex4 = Add<0n, 1n>
    type Ex5 = Add<1n, 2n>
    type Ex6 = Add<2n, 3n>
    type Ex7 = Add<0, 1n>
    type Ex8 = Add<1, 2n>
    type Ex9 = Add<2, 3n>
    type Ex10 = Add<0n, 1>
    type Ex11 = Add<1n, 2>
    type Ex12 = Add<2n, 3>

    type TestEx1 = Expect<IsEqual<Ex1, 1>>
    type TestEx2 = Expect<IsEqual<Ex2, 3>>
    type TestEx3 = Expect<IsEqual<Ex3, 5>>
    type TestEx4 = Expect<IsEqual<Ex4, 1>>
    type TestEx5 = Expect<IsEqual<Ex5, 3>>
    type TestEx6 = Expect<IsEqual<Ex6, 5>>
    type TestEx7 = Expect<IsEqual<Ex7, 1>>
    type TestEx8 = Expect<IsEqual<Ex8, 3>>
    type TestEx9 = Expect<IsEqual<Ex9, 5>>
    type TestEx10 = Expect<IsEqual<Ex10, 1>>
    type TestEx11 = Expect<IsEqual<Ex11, 3>>
    type TestEx12 = Expect<IsEqual<Ex12, 5>>
  })
})
