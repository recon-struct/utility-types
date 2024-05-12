import { describe, expectTypeOf, it } from 'vitest'
import type { IsNumber } from '~/any/antecedent/primitives/is-number'

describe('IsNumber', () => {
  it('should return true if A extends number', () => {
    type Ex1 = IsNumber<1>
    type Ex2 = IsNumber<number>

    expectTypeOf<Ex1>().toEqualTypeOf<true>()
    expectTypeOf<Ex2>().toEqualTypeOf<true>()
  })

  it('should return false if A does not extend number', () => {
    type Ex1 = IsNumber<1n>
    type Ex2 = IsNumber<bigint>

    expectTypeOf<Ex1>().toEqualTypeOf<false>()
    expectTypeOf<Ex2>().toEqualTypeOf<false>()
  })

  it('should return boolean if A is a union that extends number', () => {
    type Ex1 = IsNumber<1 | 1n>
    type Ex2 = IsNumber<number | bigint>

    expectTypeOf<Ex1>().toEqualTypeOf<boolean>()
    expectTypeOf<Ex2>().toEqualTypeOf<boolean>()
  })
})
