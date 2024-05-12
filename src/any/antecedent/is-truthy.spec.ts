import { describe, expectTypeOf, it } from 'vitest'
import type { IsTruthy } from '~/any/antecedent/is-truthy'

describe('IsTruthy', () => {
  it('should return true if A extends true', () => {
    type Ex1 = IsTruthy<true>
    type Ex2 = IsTruthy<1>
    type Ex3 = IsTruthy<'a'>
    type Ex4 = IsTruthy<{}>
    type Ex5 = IsTruthy<[]>

    expectTypeOf<Ex1>().toEqualTypeOf<true>()
    expectTypeOf<Ex2>().toEqualTypeOf<true>()
    expectTypeOf<Ex3>().toEqualTypeOf<true>()
    expectTypeOf<Ex4>().toEqualTypeOf<true>()
    expectTypeOf<Ex5>().toEqualTypeOf<true>()
  })

  it('should return false if A does not extend true', () => {
    type Ex1 = IsTruthy<false>
    type Ex2 = IsTruthy<0>
    type Ex3 = IsTruthy<''>
    type Ex4 = IsTruthy<null>
    type Ex5 = IsTruthy<undefined>
    type Ex6 = IsTruthy<never>

    expectTypeOf<Ex1>().toEqualTypeOf<false>()
    expectTypeOf<Ex2>().toEqualTypeOf<false>()
    expectTypeOf<Ex3>().toEqualTypeOf<false>()
    expectTypeOf<Ex4>().toEqualTypeOf<false>()
    expectTypeOf<Ex5>().toEqualTypeOf<false>()
    expectTypeOf<Ex6>().toEqualTypeOf<false>()
  })

  it('should return boolean if A is a union that extends true', () => {
    type Ex1 = IsTruthy<true | false>
    type Ex2 = IsTruthy<1 | 0>
    type Ex3 = IsTruthy<'a' | ''>
    type Ex4 = IsTruthy<{} | null>
    type Ex5 = IsTruthy<[] | undefined>

    expectTypeOf<Ex1>().toEqualTypeOf<boolean>()
    expectTypeOf<Ex2>().toEqualTypeOf<boolean>()
    expectTypeOf<Ex3>().toEqualTypeOf<boolean>()
    expectTypeOf<Ex4>().toEqualTypeOf<boolean>()
    expectTypeOf<Ex5>().toEqualTypeOf<boolean>()
  })
})
