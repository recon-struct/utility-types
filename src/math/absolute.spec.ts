import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'
import type { Absolute } from '~/math/absolute'

describe('Absolute', () => {
  it('should return the absolute value of a number', () => {
    type Ex1 = Absolute<0>
    type Ex2 = Absolute<-1>
    type Ex3 = Absolute<1>

    type TestEx1 = Expect<IsEqual<Ex1, 0>>
    type TestEx2 = Expect<IsEqual<Ex2, 1>>
    type TestEx3 = Expect<IsEqual<Ex3, 1>>
  })
})
