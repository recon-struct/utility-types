import { describe, expectTypeOf, it } from 'vitest'
import { And } from './and'

describe('And', () => {
  it('should evaluate `A ∧ B`', () => {
    type TT = And<true, true>
    type TF = And<true, false>
    type FT = And<false, true>
    type FF = And<false, false>

    expectTypeOf<TT>().toEqualTypeOf<true>()
    expectTypeOf<TF>().toEqualTypeOf<false>()
    expectTypeOf<FT>().toEqualTypeOf<false>()
    expectTypeOf<FF>().toEqualTypeOf<false>()
  })
})
