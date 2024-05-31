import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/expect'
import type { Decrement } from './decrement'

describe('Decrement', () => {
  it('should decrement a number by 1', () => {
    type Ex1 = Decrement<0>
    type Ex2 = Decrement<1>

    type TestEx1 = Expect<IsEqual<Ex1, -1>>
    type TestEx2 = Expect<IsEqual<Ex2, 0>>
  })
})
