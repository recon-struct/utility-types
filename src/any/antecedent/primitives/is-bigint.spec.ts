import { describe, expectTypeOf, it } from 'vitest'
import type { IsBigInt } from '~/any/antecedent/primitives/is-bigint'

describe('IsBigInt', () => {
  it('should return true if A extends bigint', () => {
    type Ex1 = IsBigInt<1n>
    type Ex2 = IsBigInt<bigint>

    expectTypeOf<Ex1>().toEqualTypeOf<true>()
    expectTypeOf<Ex2>().toEqualTypeOf<true>()
  })

  it('should return false if A does not extend bigint', () => {
    type Ex1 = IsBigInt<1>
    type Ex2 = IsBigInt<number>

    expectTypeOf<Ex1>().toEqualTypeOf<false>()
    expectTypeOf<Ex2>().toEqualTypeOf<false>()
  })

  it('should return boolean if A is a union that extends bigint', () => {
    type Ex1 = IsBigInt<1 | 1n>
    type Ex2 = IsBigInt<number | bigint>

    expectTypeOf<Ex1>().toEqualTypeOf<boolean>()
    expectTypeOf<Ex2>().toEqualTypeOf<boolean>()
  })
})
