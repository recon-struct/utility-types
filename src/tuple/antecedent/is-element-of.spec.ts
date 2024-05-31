import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/expect'
import type { IsElementOf } from '~/tuple/antecedent/is-element-of'

describe('IsElementOf', () => {
  it('should be true if B extends ElementOf<A>', () => {
    type Ex1 = IsElementOf<['a', 'b', 'c'], 'a'> // true
    type TestEx1 = Expect<IsEqual<Ex1, true>>
  })

  it('should be false if B does not extend ElementOf<A>', () => {
    type Ex2 = IsElementOf<['a', 'b', 'c'], 'z'> // false
    type TestEx2 = Expect<IsEqual<Ex2, false>>
  })
})
