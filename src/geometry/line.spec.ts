import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/expect'
import type { Line } from './line'
import type { Point } from './point'

describe('line', () => {
  it('should define a line as a 2 tuple of points', () => {
    type Ex1 = Line<Point<-1, -1>, Point<1, 1>>
    type Ex2 = Line<Point<1, 1>, Point<-1, -1>>

    type TestEx1 = Expect<IsEqual<Ex1, [Point<-1, -1>, Point<1, 1>]>>
    type TestEx2 = Expect<IsEqual<Ex2, [Point<1, 1>, Point<-1, -1>]>>
  })
})
