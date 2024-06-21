import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/expect'
import type { Ellipse } from './ellipse'
import type { Point } from './point'

describe('Ellipse', () => {
  it('should define an ellipse as a 3 tuple of a point and two numbers', () => {
    type Ex1 = Ellipse<Point<0, 0>, 1, 1>
    type Ex2 = Ellipse<Point<1, 1>, 2, 2>

    type TestEx1 = Expect<
      IsEqual<
        Ex1,
        { type: 'ellipse'; center: Point<0, 0>; radiusX: 1; radiusY: 1 }
      >
    >
    type TestEx2 = Expect<
      IsEqual<
        Ex2,
        { type: 'ellipse'; center: Point<1, 1>; radiusX: 2; radiusY: 2 }
      >
    >
  })
})
