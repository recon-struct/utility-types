import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/expect'
import type { Point } from './point'
import type { QuadraticCurve } from './quadratic-curve'

describe('QuadraticCurve', () => {
  it('should define a quadratic curve as a 3 tuple of points', () => {
    type Ex1 = QuadraticCurve<Point<0, 0>, Point<1, 1>, Point<2, 2>>
    type Ex2 = QuadraticCurve<Point<2, 2>, Point<1, 1>, Point<0, 0>>

    type TestEx1 = Expect<
      IsEqual<
        Ex1,
        {
          type: 'quadratic-curve'
          start: Point<0, 0>
          control: Point<1, 1>
          end: Point<2, 2>
        }
      >
    >
    type TestEx2 = Expect<
      IsEqual<
        Ex2,
        {
          type: 'quadratic-curve'
          start: Point<2, 2>
          control: Point<1, 1>
          end: Point<0, 0>
        }
      >
    >
  })
})
