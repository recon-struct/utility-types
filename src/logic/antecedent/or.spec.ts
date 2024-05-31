import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/expect'
import type { Or } from '~/logic/antecedent/or'

describe('Or', () => {
  it('should evaluate `A ∨ B`', () => {
    type TT = Or<true, true>
    type TF = Or<true, false>
    type FT = Or<false, true>
    type FF = Or<false, false>

    type TestTT = Expect<IsEqual<TT, true>>
    type TestTF = Expect<IsEqual<TF, true>>
    type TestFT = Expect<IsEqual<FT, true>>
    type TestFF = Expect<IsEqual<FF, false>>
  })
})
