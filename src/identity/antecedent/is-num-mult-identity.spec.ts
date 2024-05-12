import { describe, expectTypeOf, it } from 'vitest'
import type { IsNumMultIdentity } from '~/identity/antecedent/is-num-mult-identity'

describe('IsNumMultIdentity', () => {
  it('should evaluate if the item is 1', () => {
    type Ex1 = IsNumMultIdentity<1>

    expectTypeOf<Ex1>().toEqualTypeOf<true>()
  })

  it('should not match if the item is not 1', () => {
    type Ex1 = IsNumMultIdentity<2>
    type Ex2 = IsNumMultIdentity<1n>

    expectTypeOf<Ex1>().toEqualTypeOf<false>()
    expectTypeOf<Ex2>().toEqualTypeOf<false>()
  })
})
