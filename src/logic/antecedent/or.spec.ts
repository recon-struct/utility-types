import { describe, expectTypeOf, it } from 'vitest'
import { Or } from './or'

describe('Or', () => {
  it('should evaluate `A ∨ B`', () => {
    type TT = Or<true, true>
    type TF = Or<true, false>
    type FT = Or<false, true>
    type FF = Or<false, false>

    expectTypeOf<TT>().toEqualTypeOf<true>()
    expectTypeOf<TF>().toEqualTypeOf<true>()
    expectTypeOf<FT>().toEqualTypeOf<true>()
    expectTypeOf<FF>().toEqualTypeOf<false>()
  })
})
