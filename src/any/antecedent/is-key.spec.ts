import { describe, expectTypeOf, it } from 'vitest'
import type { IsKey } from '~/any/antecedent/is-key'

describe('IsKey', () => {
  it('should return true if A extends string | number', () => {
    type Ex1 = IsKey<'hello'>
    type Ex2 = IsKey<string>
    type Ex3 = IsKey<1>
    type Ex4 = IsKey<number>
    type Ex5 = IsKey<'hello' | 1>
    type Ex6 = IsKey<string | 1>
    type Ex7 = IsKey<string | number>
    type Ex8 = IsKey<'hello' | 1 | 'world' | 2>
    type Ex9 = IsKey<string | 1 | 'world' | 2>
    type Ex10 = IsKey<string | number | 'world' | 2>

    expectTypeOf<Ex1>().toEqualTypeOf<true>()
    expectTypeOf<Ex2>().toEqualTypeOf<true>()
    expectTypeOf<Ex3>().toEqualTypeOf<true>()
    expectTypeOf<Ex4>().toEqualTypeOf<true>()
    expectTypeOf<Ex5>().toEqualTypeOf<true>()
    expectTypeOf<Ex6>().toEqualTypeOf<true>()
    expectTypeOf<Ex7>().toEqualTypeOf<true>()
    expectTypeOf<Ex8>().toEqualTypeOf<true>()
    expectTypeOf<Ex9>().toEqualTypeOf<true>()
    expectTypeOf<Ex10>().toEqualTypeOf<true>()
  })

  it('should return false if A does not extend string | number', () => {
    type Ex1 = IsKey<true>
    type Ex2 = IsKey<boolean>
    type Ex3 = IsKey<undefined>
    type Ex4 = IsKey<null>

    expectTypeOf<Ex1>().toEqualTypeOf<false>()
    expectTypeOf<Ex2>().toEqualTypeOf<false>()
    expectTypeOf<Ex3>().toEqualTypeOf<false>()
    expectTypeOf<Ex4>().toEqualTypeOf<false>()
  })

  it('should return boolean if A is a union that extends string | number', () => {
    type Ex1 = IsKey<true | 'hello'>
    type Ex2 = IsKey<boolean | 1>
    type Ex3 = IsKey<undefined | 'world'>
    type Ex4 = IsKey<null | 2>

    expectTypeOf<Ex1>().toEqualTypeOf<boolean>()
    expectTypeOf<Ex2>().toEqualTypeOf<boolean>()
    expectTypeOf<Ex3>().toEqualTypeOf<boolean>()
    expectTypeOf<Ex4>().toEqualTypeOf<boolean>()
  })
})
