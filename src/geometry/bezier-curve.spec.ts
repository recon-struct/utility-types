import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/expect'
import type { BezierCurve } from './bezier-curve'

describe('bezier-curve', () => {
  it('should define a bezier curve as a 4 tuple of points', () => {
    type Ex1 = BezierCurve<[0, 0], [1, 1], [2, 2], [3, 3]>
    type Ex2 = BezierCurve<[3, 3], [2, 2], [1, 1], [0, 0]>

    type TestEx1 = Expect<
      IsEqual<
        Ex1,
        { start: [0, 0]; control1: [1, 1]; control2: [2, 2]; end: [3, 3] }
      >
    >
    type TestEx2 = Expect<
      IsEqual<
        Ex2,
        { start: [3, 3]; control1: [2, 2]; control2: [1, 1]; end: [0, 0] }
      >
    >
  })
})
