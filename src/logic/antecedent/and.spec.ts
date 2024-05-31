import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/expect'
import type { And } from '~/logic/antecedent/and'

describe('And', () => {
  it('should evaluate `A ∧ B`', () => {
    type TT = And<true, true>
    type TF = And<true, false>
    type FT = And<false, true>
    type FF = And<false, false>

    type TestTT = Expect<IsEqual<TT, true>>
    type TestTF = Expect<IsEqual<TF, false>>
    type TestFT = Expect<IsEqual<FT, false>>
    type TestFF = Expect<IsEqual<FF, false>>
  })
})
