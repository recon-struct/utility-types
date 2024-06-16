import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/expect'
import type { Ellipse } from './ellipse'

describe('Ellipse', () => {
  it('should define an ellipse as a 3 tuple of a point and two numbers', () => {
    type Ex1 = Ellipse<[0, 0], 1, 1>
    type Ex2 = Ellipse<[1, 1], 2, 2>

    type TestEx1 = Expect<
      IsEqual<Ex1, { center: [0, 0]; radiusX: 1; radiusY: 1 }>
    >
    type TestEx2 = Expect<
      IsEqual<Ex2, { center: [1, 1]; radiusX: 2; radiusY: 2 }>
    >
  })
})
