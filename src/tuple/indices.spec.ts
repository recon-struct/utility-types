import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'
import type { Indices } from '~/tuple/indices'

describe('Indices', () => {
  it('should get the indices of `A`', () => {
    type Ex1 = Indices<['a', 'b', 'c']> // 0 | 1 | 2
    type TestEx1 = Expect<IsEqual<Ex1, '0' | '1' | '2'>>
  })
})
