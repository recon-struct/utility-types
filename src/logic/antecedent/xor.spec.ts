import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/expect'
import type { Xor } from '~/logic/antecedent/xor'

describe('Xor', () => {
  it('should evaluate `A ⊕ B`', () => {
    type TT = Xor<true, true>
    type TF = Xor<true, false>
    type FT = Xor<false, true>
    type FF = Xor<false, false>

    type TestTT = Expect<IsEqual<TT, false>>
    type TestTF = Expect<IsEqual<TF, true>>
    type TestFT = Expect<IsEqual<FT, true>>
    type TestFF = Expect<IsEqual<FF, false>>
  })
})
