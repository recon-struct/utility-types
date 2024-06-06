import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/expect'
import type { Max } from './max'

describe('max', () => {
  it('should return the maximum value of two numbers', () => {
    type Ex1 = Max<1, 2>
    type Ex2 = Max<0, 1>
    type Ex3 = Max<-1, 1>
    type Ex4 = Max<1, 1>
    type Ex5 = Max<1, 0>
    type Ex6 = Max<1, -1>
    type Ex7 = Max<0, 0>

    type TestEx1 = Expect<IsEqual<Ex1, 2>>
    type TestEx2 = Expect<IsEqual<Ex2, 1>>
    type TestEx3 = Expect<IsEqual<Ex3, 1>>
    type TestEx4 = Expect<IsEqual<Ex4, 1>>
    type TestEx5 = Expect<IsEqual<Ex5, 1>>
    type TestEx6 = Expect<IsEqual<Ex6, 1>>
    type TestEx7 = Expect<IsEqual<Ex7, 0>>
  })
})
