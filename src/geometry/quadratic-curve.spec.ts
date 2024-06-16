import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/expect'
import type { QuadraticCurve } from './quadratic-curve'

describe('QuadraticCurve', () => {
  it('should define a quadratic curve as a 3 tuple of points', () => {
    type Ex1 = QuadraticCurve<[0, 0], [1, 1], [2, 2]>
    type Ex2 = QuadraticCurve<[2, 2], [1, 1], [0, 0]>

    type TestEx1 = Expect<
      IsEqual<Ex1, { start: [0, 0]; control: [1, 1]; end: [2, 2] }>
    >
    type TestEx2 = Expect<
      IsEqual<Ex2, { start: [2, 2]; control: [1, 1]; end: [0, 0] }>
    >
  })
})
