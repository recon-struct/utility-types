import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/expect'
import type { Absolute } from './absolute'

describe('absolute', () => {
  it('should return the absolute value of a number', () => {
    type Ex1 = Absolute<-1>
    type Ex2 = Absolute<0>
    type Ex3 = Absolute<1>
    type Ex4 = Absolute<-1n>
    type Ex5 = Absolute<0n>
    type Ex6 = Absolute<1n>

    type TestEx1 = Expect<IsEqual<Ex1, 1>>
    type TestEx2 = Expect<IsEqual<Ex2, 0>>
    type TestEx3 = Expect<IsEqual<Ex3, 1>>
    type TestEx4 = Expect<IsEqual<Ex4, 1>>
    type TestEx5 = Expect<IsEqual<Ex5, 0>>
    type TestEx6 = Expect<IsEqual<Ex6, 1>>
  })
})
