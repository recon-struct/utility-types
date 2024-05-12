import { describe, expectTypeOf, it } from 'vitest'
import type { IsFalsy } from '~/any/antecedent/is-falsy'

describe('IsFalsy', () => {
  it('should return true if A extends falsy', () => {
    type Ex1 = IsFalsy<null>
    type Ex2 = IsFalsy<undefined>
    type Ex3 = IsFalsy<false>
    type Ex4 = IsFalsy<0>
    type Ex5 = IsFalsy<''>
    type Ex6 = IsFalsy<0n>

    expectTypeOf<Ex1>().toEqualTypeOf<true>()
    expectTypeOf<Ex2>().toEqualTypeOf<true>()
    expectTypeOf<Ex3>().toEqualTypeOf<true>()
    expectTypeOf<Ex4>().toEqualTypeOf<true>()
    expectTypeOf<Ex5>().toEqualTypeOf<true>()
    expectTypeOf<Ex6>().toEqualTypeOf<true>()
  })

  it('should return false if A does not extend falsy', () => {
    type Ex1 = IsFalsy<true>
    type Ex2 = IsFalsy<1>
    type Ex3 = IsFalsy<'hello'>
    type Ex4 = IsFalsy<{}>
    type Ex5 = IsFalsy<[]>

    expectTypeOf<Ex1>().toEqualTypeOf<false>()
    expectTypeOf<Ex2>().toEqualTypeOf<false>()
    expectTypeOf<Ex3>().toEqualTypeOf<false>()
    expectTypeOf<Ex4>().toEqualTypeOf<false>()
    expectTypeOf<Ex5>().toEqualTypeOf<false>()
  })

  it('should return false if A extends NaN (number) a deviation from JS', () => {
    type Ex1 = IsFalsy<typeof NaN>

    expectTypeOf<Ex1>().toEqualTypeOf<false>()
  })

  it('should return boolean if A is a union that extends falsy', () => {
    type Ex1 = IsFalsy<null | 1>
    type Ex2 = IsFalsy<false | []>
    type Ex3 = IsFalsy<'hello' | 0n>

    expectTypeOf<Ex1>().toEqualTypeOf<boolean>()
    expectTypeOf<Ex2>().toEqualTypeOf<boolean>()
    expectTypeOf<Ex3>().toEqualTypeOf<boolean>()
  })
})
