import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/expect'
import type { Join } from '~/tuple/join'

describe('Join', () => {
  it('should join `A` and `B`', () => {
    type Ex1 = Join<['a', 'b', 'c']>
    type TestEx1 = Expect<IsEqual<Ex1, 'abc'>>
  })

  it('should join `A` and `B` with a separator', () => {
    type Ex1 = Join<['a', 'b', 'c'], '-'>
    type TestEx1 = Expect<IsEqual<Ex1, 'a-b-c'>>
  })
})
