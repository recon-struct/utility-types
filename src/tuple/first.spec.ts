import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/expect'
import type { First } from '~/tuple/first'

describe('First', () => {
  it('should get the first element of `A`', () => {
    type Ex1 = First<['a', 'b', 'c']> // 'a'
    type TestEx1 = Expect<IsEqual<Ex1, 'a'>>
  })
})
