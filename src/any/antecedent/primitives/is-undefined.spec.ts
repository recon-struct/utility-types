import { describe, expectTypeOf, it } from 'vitest'
import type { IsUndefined } from '~/any/antecedent/primitives/is-undefined'

describe('IsUndefined', () => {
  it('should return true if A extends undefined', () => {
    type Ex1 = IsUndefined<undefined>

    expectTypeOf<Ex1>().toEqualTypeOf<true>()
  })

  it('should return false if A does not extend undefined', () => {
    type Ex1 = IsUndefined<null>
    type Ex2 = IsUndefined<void>

    expectTypeOf<Ex1>().toEqualTypeOf<false>()
    expectTypeOf<Ex2>().toEqualTypeOf<false>()
  })

  it('should return boolean if A is a union that extends undefined', () => {
    type Ex1 = IsUndefined<undefined | null>
    type Ex2 = IsUndefined<void | undefined>

    expectTypeOf<Ex1>().toEqualTypeOf<boolean>()
    expectTypeOf<Ex2>().toEqualTypeOf<boolean>()
  })
})
