import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/expect'
import type { BezierCurve } from './bezier-curve'
import type { Point } from './point'

describe('bezier-curve', () => {
  it('should define a bezier curve as a 4 tuple of points', () => {
    type Ex1 = BezierCurve<Point<0, 0>, Point<1, 1>, Point<2, 2>, Point<3, 3>>
    type Ex2 = BezierCurve<Point<3, 3>, Point<2, 2>, Point<1, 1>, Point<0, 0>>

    type TestEx1 = Expect<
      IsEqual<
        Ex1,
        {
          type: 'bezier-curve'
          start: Point<0, 0>
          control1: Point<1, 1>
          control2: Point<2, 2>
          end: Point<3, 3>
        }
      >
    >
    type TestEx2 = Expect<
      IsEqual<
        Ex2,
        {
          type: 'bezier-curve'
          start: Point<3, 3>
          control1: Point<2, 2>
          control2: Point<1, 1>
          end: Point<0, 0>
        }
      >
    >
  })
})
