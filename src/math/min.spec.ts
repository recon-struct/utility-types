import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'
import type { Min } from '~/math/min'

describe('Min', () => {
  it('should return the minimum of two numbers', () => {
    type Ex1 = Min<1, 2>
    type Ex2 = Min<2, 1>

    type TestEx1 = Expect<IsEqual<Ex1, 1>>
    type TestEx2 = Expect<IsEqual<Ex2, 1>>
  })
})
