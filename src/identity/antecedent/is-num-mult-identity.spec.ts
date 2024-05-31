import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/expect'
import type { IsNumMultIdentity } from '~/identity/antecedent/is-num-mult-identity'

describe('IsNumMultIdentity', () => {
  it('should evaluate if the item is 1', () => {
    type Ex1 = IsNumMultIdentity<1>

    type TestEx1 = Expect<IsEqual<Ex1, true>>
  })

  it('should not match if the item is not 1', () => {
    type Ex1 = IsNumMultIdentity<2>
    type Ex2 = IsNumMultIdentity<1n>

    type TestEx1 = Expect<IsEqual<Ex1, false>>
    type TestEx2 = Expect<IsEqual<Ex2, false>>
  })
})
