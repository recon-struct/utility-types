import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'
import type { Concat } from '~/tuple/concat'

describe('Concat', () => {
  it('should concatenate `A` and `B`', () => {
    type Ex1 = Concat<['a', 'b', 'c'], [1, 2, 3]> // ["a", "b", "c", 1, 2, 3]
    type TestEx1 = Expect<IsEqual<Ex1, ['a', 'b', 'c', 1, 2, 3]>>
  })
})
