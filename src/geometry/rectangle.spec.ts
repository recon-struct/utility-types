import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/expect'
import type { Point } from './point'
import type { Rectangle } from './rectangle'

describe('rectangle', () => {
  it('should define a rectangle as a 3 tuple of a point and 2 numbers', () => {
    type Ex1 = Rectangle<Point<0, 0>, 0, 0>
    type Ex2 = Rectangle<Point<1, 1>, 1, 1>
    type Ex3 = Rectangle<Point<-1, -1>, -1, -1>

    type TestEx1 = Expect<
      IsEqual<
        Ex1,
        { type: 'rectangle'; topLeft: Point<0, 0>; width: 0; height: 0 }
      >
    >
    type TestEx2 = Expect<
      IsEqual<
        Ex2,
        { type: 'rectangle'; topLeft: Point<1, 1>; width: 1; height: 1 }
      >
    >
    type TestEx3 = Expect<
      IsEqual<
        Ex3,
        { type: 'rectangle'; topLeft: Point<-1, -1>; width: -1; height: -1 }
      >
    >
  })
})
