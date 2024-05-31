import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/expect'
import type { Multiply } from './multiply'

describe('Multiply', () => {
  it('should multiply two numbers', () => {
    type Ex1 = Multiply<9, 3>
    type Ex2 = Multiply<11, 3>
    type Ex3 = Multiply<9n, 3n>
    type Ex4 = Multiply<11n, 3n>

    type TestEx1 = Expect<IsEqual<Ex1, 27>>
    type TestEx2 = Expect<IsEqual<Ex2, 33>>
    type TestEx3 = Expect<IsEqual<Ex3, 27>>
    type TestEx4 = Expect<IsEqual<Ex4, 33>>
  })
})
