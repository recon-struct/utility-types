import { describe, expectTypeOf, it } from 'vitest'
import type { IsNullish } from '~/any/antecedent/is-nullish'

describe('IsNullish', () => {
  it('should return true if A extends null | undefined', () => {
    type Ex1 = IsNullish<null>
    type Ex2 = IsNullish<undefined>

    expectTypeOf<Ex1>().toEqualTypeOf<true>()
    expectTypeOf<Ex2>().toEqualTypeOf<true>()
  })

  it('should return false if A does not extend null | undefined', () => {
    type Ex1 = IsNullish<0>
    type Ex2 = IsNullish<void>

    expectTypeOf<Ex1>().toEqualTypeOf<false>()
    expectTypeOf<Ex2>().toEqualTypeOf<false>()
  })

  it('should return boolean if A is a union that extends null | undefined', () => {
    type Ex1 = IsNullish<null | true>
    type Ex2 = IsNullish<1 | null>

    expectTypeOf<Ex1>().toEqualTypeOf<boolean>()
    expectTypeOf<Ex2>().toEqualTypeOf<boolean>()
  })
})
