import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'
import type { Decrement } from '~/math/decrement'

describe('Decrement', () => {
  it('should decrement a number', () => {
    type Ex1 = Decrement<2>
    type Ex2 = Decrement<1>

    type TestEx1 = Expect<IsEqual<Ex1, 1>>
    type TestEx2 = Expect<IsEqual<Ex2, 0>>
  })
})
