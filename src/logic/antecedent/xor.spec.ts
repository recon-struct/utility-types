import { describe, expectTypeOf, it } from 'vitest'
import type { Xor } from '~/logic/antecedent/xor'

describe('Xor', () => {
  it('should evaluate `A ⊕ B`', () => {
    type TT = Xor<true, true>
    type TF = Xor<true, false>
    type FT = Xor<false, true>
    type FF = Xor<false, false>

    expectTypeOf<TT>().toEqualTypeOf<false>()
    expectTypeOf<TF>().toEqualTypeOf<true>()
    expectTypeOf<FT>().toEqualTypeOf<true>()
    expectTypeOf<FF>().toEqualTypeOf<false>()
  })
})
