import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'
import type { IsBigIntAddIdentity } from '~/identity/antecedent/is-bigint-add-identity'

describe('IsBigIntAddIdentity', () => {
  it('should evaluate if the item is 0n', () => {
    type Ex1 = IsBigIntAddIdentity<0n>

    type TestEx1 = Expect<IsEqual<Ex1, true>>
  })

  it('should not match if the item is not 0n', () => {
    type Ex1 = IsBigIntAddIdentity<1n>
    type Ex2 = IsBigIntAddIdentity<0>

    type TestEx1 = Expect<IsEqual<Ex1, false>>
    type TestEx2 = Expect<IsEqual<Ex2, false>>
  })
})
