import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'
import type { Max } from '~/math/max'

describe('Max', () => {
  it('should return the larger of two numbers', () => {
    type Ex1 = Max<1, 2>
    type Ex2 = Max<2, 1>

    type TestEx1 = Expect<IsEqual<Ex1, 2>>
    type TestEx2 = Expect<IsEqual<Ex2, 2>>
  })
})
