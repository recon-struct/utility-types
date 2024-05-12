import { describe, expectTypeOf, it } from 'vitest'
import type { IsBoolean } from '~/any/antecedent/primitives/is-boolean'

describe('IsBoolean', () => {
  it('should return true if A extends boolean', () => {
    type Ex1 = IsBoolean<true | false>
    type Ex2 = IsBoolean<boolean>

    expectTypeOf<Ex1>().toEqualTypeOf<true>()
    expectTypeOf<Ex2>().toEqualTypeOf<true>()
  })

  it('should return false if A does not extend boolean', () => {
    type Ex1 = IsBoolean<1>
    type Ex2 = IsBoolean<number>

    expectTypeOf<Ex1>().toEqualTypeOf<false>()
    expectTypeOf<Ex2>().toEqualTypeOf<false>()
  })

  it('should return boolean if A is a union that extends boolean', () => {
    type Ex1 = IsBoolean<1 | true>
    type Ex2 = IsBoolean<number | false>

    expectTypeOf<Ex1>().toEqualTypeOf<boolean>()
    expectTypeOf<Ex2>().toEqualTypeOf<boolean>()
  })
})
