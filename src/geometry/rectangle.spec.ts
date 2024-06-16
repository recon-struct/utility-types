import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/expect'
import type { Rectangle } from './rectangle'

describe('rectangle', () => {
  it('should define a rectangle as a 3 tuple of a point and 2 numbers', () => {
    type Ex1 = Rectangle<[0, 0], 0, 0>
    type Ex2 = Rectangle<[1, 1], 1, 1>
    type Ex3 = Rectangle<[-1, -1], -1, -1>

    type TestEx1 = Expect<
      IsEqual<Ex1, { topLeft: [0, 0]; width: 0; height: 0 }>
    >
    type TestEx2 = Expect<
      IsEqual<Ex2, { topLeft: [1, 1]; width: 1; height: 1 }>
    >
    type TestEx3 = Expect<
      IsEqual<Ex3, { topLeft: [-1, -1]; width: -1; height: -1 }>
    >
  })
})
