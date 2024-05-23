import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'
import type { Append } from '~/tuple/append'

describe('Append', () => {
  it('should append `B` onto `A`', () => {
    type Ex1 = Append<['a', 'b'], 'c'> // ['a', 'b', 'c']
    type TestEx1 = Expect<IsEqual<Ex1, ['a', 'b', 'c']>>
  })
})
