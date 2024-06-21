import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/expect'
import type { Point } from './point'

describe('point', () => {
  it('should define a point as a 2 tuple of numbers', () => {
    type Ex1 = Point<0, 0>
    type Ex2 = Point<1, 1>
    type Ex3 = Point<-1, -1>

    type TestEx1 = Expect<IsEqual<Ex1, [0, 0]>>
    type TestEx2 = Expect<IsEqual<Ex2, [1, 1]>>
    type TestEx3 = Expect<IsEqual<Ex3, [-1, -1]>>
  })
})
