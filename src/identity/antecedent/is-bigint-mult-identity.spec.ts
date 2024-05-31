import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/expect'
import type { IsBigIntMultIdentity } from '~/identity/antecedent/is-bigint-mult-identity'

describe('IsBigIntMultIdentity', () => {
  it('should evaluate if the item is 1n', () => {
    type Ex1 = IsBigIntMultIdentity<1n>

    type TestEx1 = Expect<IsEqual<Ex1, true>>
  })

  it('should not match if the item is not 1n', () => {
    type Ex1 = IsBigIntMultIdentity<2n>
    type Ex2 = IsBigIntMultIdentity<1>

    type TestEx1 = Expect<IsEqual<Ex1, false>>
    type TestEx2 = Expect<IsEqual<Ex2, false>>
  })
})
