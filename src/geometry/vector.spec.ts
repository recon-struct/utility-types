import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/expect'
import type { Vector } from './vector'

describe('Vector', () => {
  it('should be a tuple with two numbers', () => {
    type Ex1 = Vector<1, 2>

    type TestEx1 = Expect<IsEqual<Ex1, [1, 2] & { type: 'vector' }>>
  })
})
