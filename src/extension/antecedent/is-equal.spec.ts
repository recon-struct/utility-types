import { describe, expectTypeOf, it } from 'vitest'
import type { IsEqual } from '~/extension/antecedent/is-equal'

describe('IsEqual', () => {
  it('should return true if two types are symmetrically equal', () => {
    type A = number
    type B = number
    type Ex = IsEqual<A, B>

    expectTypeOf<Ex>().toEqualTypeOf<true>()
  })

  it('should return false if two types are not symmetrically equal', () => {
    type Ex1 = IsEqual<'hello', string>
    type Ex2 = IsEqual<string, 'hello'>
    type Ex3 = IsEqual<1, number>
    type Ex4 = IsEqual<number, 1n>

    expectTypeOf<Ex1>().toEqualTypeOf<false>()
    expectTypeOf<Ex2>().toEqualTypeOf<false>()
    expectTypeOf<Ex3>().toEqualTypeOf<false>()
    expectTypeOf<Ex4>().toEqualTypeOf<false>()
  })
})
