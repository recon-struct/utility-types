import { describe, expectTypeOf, it } from 'vitest'
import type { IsNull } from '~/any/antecedent/primitives/is-null'

describe('IsNull', () => {
  it('should return true if A extends null', () => {
    type Ex1 = IsNull<null>

    expectTypeOf<Ex1>().toEqualTypeOf<true>()
  })

  it('should return false if A does not extend null', () => {
    type Ex1 = IsNull<undefined>
    type Ex2 = IsNull<void>

    expectTypeOf<Ex1>().toEqualTypeOf<false>()
    expectTypeOf<Ex2>().toEqualTypeOf<false>()
  })

  it('should return boolean if A is a union that extends null', () => {
    type Ex1 = IsNull<null | undefined>
    type Ex2 = IsNull<void | null>

    expectTypeOf<Ex1>().toEqualTypeOf<boolean>()
    expectTypeOf<Ex2>().toEqualTypeOf<boolean>()
  })
})
