import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/expect'
import type { Path } from './path'

describe('Path', () => {
  it('should define a path as a list of points and a boolean indicating if the path is closed', () => {
    type Ex1 = Path<[[0, 0], [1, 1], [2, 2]], false>
    type Ex2 = Path<[[2, 2], [1, 1], [0, 0]], true>

    type TestEx1 = Expect<
      IsEqual<Ex1, { points: [[0, 0], [1, 1], [2, 2]]; isClosed: false }>
    >
    type TestEx2 = Expect<
      IsEqual<Ex2, { points: [[2, 2], [1, 1], [0, 0]]; isClosed: true }>
    >
  })
})
