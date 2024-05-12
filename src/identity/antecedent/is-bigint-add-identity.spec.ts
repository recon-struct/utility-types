import { describe, expectTypeOf, it } from 'vitest'
import type { IsBigIntAddIdentity } from '~/identity/antecedent/is-bigint-add-identity'

describe('IsBigIntAddIdentity', () => {
  it('should evaluate if the item is 0n', () => {
    type Ex1 = IsBigIntAddIdentity<0n>

    expectTypeOf<Ex1>().toEqualTypeOf<true>()
  })

  it('should not match if the item is not 0n', () => {
    type Ex1 = IsBigIntAddIdentity<1n>
    type Ex2 = IsBigIntAddIdentity<0>

    expectTypeOf<Ex1>().toEqualTypeOf<false>()
    expectTypeOf<Ex2>().toEqualTypeOf<false>()
  })
})
