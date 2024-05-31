import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/expect'
import type { Divide } from './divide'

describe('divide', () => {
  it('should divide two numbers', () => {
    type Ex1 = Divide<9, 3>
    type Ex2 = Divide<11, 3>
    type Ex3 = Divide<9n, 3n>
    type Ex4 = Divide<11n, 3n>

    type TestEx1 = Expect<IsEqual<Ex1, 3>>
    type TestEx2 = Expect<IsEqual<Ex2, 3>>
    type TestEx3 = Expect<IsEqual<Ex3, 3>>
    type TestEx4 = Expect<IsEqual<Ex4, 3>>
  })
})
