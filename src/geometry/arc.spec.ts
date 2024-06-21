import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/expect'
import type { Arc } from './arc'
import type { Point } from './point'

describe('Arc', () => {
  it('should define an arc as a center point, radius, and two angles', () => {
    type Ex1 = Arc<Point<0, 0>, 1, 0, 1>
    type Ex2 = Arc<Point<1, 1>, 2, 1, 2>
    type Ex3 = Arc<Point<2, 2>, 3, 2, 3>

    type TestEx1 = Expect<
      IsEqual<
        Ex1,
        {
          type: 'arc'
          center: Point<0, 0>
          radius: 1
          startAngle: 0
          endAngle: 1
        }
      >
    >
    type TestEx2 = Expect<
      IsEqual<
        Ex2,
        {
          type: 'arc'
          center: Point<1, 1>
          radius: 2
          startAngle: 1
          endAngle: 2
        }
      >
    >
    type TestEx3 = Expect<
      IsEqual<
        Ex3,
        {
          type: 'arc'
          center: Point<2, 2>
          radius: 3
          startAngle: 2
          endAngle: 3
        }
      >
    >
  })
})
