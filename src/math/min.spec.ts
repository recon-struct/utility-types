import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/expect'
import type { Min } from './min'

describe('min', () => {
  it('should return the minimum value of two numbers', () => {
    type Ex1 = Min<1, 2>
    type Ex2 = Min<0, 1>
    type Ex3 = Min<-1, 1>
    type Ex4 = Min<1, 1>
    type Ex5 = Min<1, 0>
    type Ex6 = Min<1, -1>
    type Ex7 = Min<0, 0>

    type TestEx1 = Expect<IsEqual<Ex1, 1>>
    type TestEx2 = Expect<IsEqual<Ex2, 0>>
    type TestEx3 = Expect<IsEqual<Ex3, -1>>
    type TestEx4 = Expect<IsEqual<Ex4, 1>>
    type TestEx5 = Expect<IsEqual<Ex5, 0>>
    type TestEx6 = Expect<IsEqual<Ex6, -1>>
    type TestEx7 = Expect<IsEqual<Ex7, 0>>
  })
})
