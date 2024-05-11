import { describe, expectTypeOf, it } from 'vitest'
import { IsBigIntMultIdentity } from './is-bigint-mult-identity'

describe('IsBigIntMultIdentity', () => {
  it('should evaluate if the item is 1n', () => {
    type Ex1 = IsBigIntMultIdentity<1n>

    expectTypeOf<Ex1>().toEqualTypeOf<true>()
  })

  it('should not match if the item is not 1n', () => {
    type Ex1 = IsBigIntMultIdentity<2n>
    type Ex2 = IsBigIntMultIdentity<1>

    expectTypeOf<Ex1>().toEqualTypeOf<false>()
    expectTypeOf<Ex2>().toEqualTypeOf<false>()
  })
})
