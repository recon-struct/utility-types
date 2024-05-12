import { describe, expectTypeOf, it } from 'vitest'
import type { IsNever } from '~/any/antecedent/is-never'

describe('IsNever', () => {
  it('should return true if A extends never', () => {
    type Ex1 = IsNever<never>

    expectTypeOf<Ex1>().toEqualTypeOf<true>()
  })

  it('should return false if A does not extend never', () => {
    type Ex1 = IsNever<null>
    type Ex2 = IsNever<void>

    expectTypeOf<Ex1>().toEqualTypeOf<false>()
    expectTypeOf<Ex2>().toEqualTypeOf<false>()
  })

  it('should return false if A is a union that extends never', () => {
    type Ex1 = IsNever<never | null>
    type Ex2 = IsNever<void | never>

    expectTypeOf<Ex1>().toEqualTypeOf<false>()
    expectTypeOf<Ex2>().toEqualTypeOf<false>()
  })
})
