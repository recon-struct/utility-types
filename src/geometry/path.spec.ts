import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/expect'
import type { Path } from './path'
import type { Point } from './point'

describe('Path', () => {
  it('should define a path as a list of points and a boolean indicating if the path is closed', () => {
    type Ex1 = Path<[Point<0, 0>, Point<1, 1>, Point<2, 2>], false>
    type Ex2 = Path<[Point<2, 2>, Point<1, 1>, Point<0, 0>], true>

    type TestEx1 = Expect<
      IsEqual<
        Ex1,
        {
          type: 'path'
          points: [Point<0, 0>, Point<1, 1>, Point<2, 2>]
          isClosed: false
        }
      >
    >
    type TestEx2 = Expect<
      IsEqual<
        Ex2,
        {
          type: 'path'
          points: [Point<2, 2>, Point<1, 1>, Point<0, 0>]
          isClosed: true
        }
      >
    >
  })
})
