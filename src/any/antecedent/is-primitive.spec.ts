import { describe, expectTypeOf, it } from 'vitest'
import type { IsPrimitive } from '~/any/antecedent/is-primitive'

describe('IsPrimitive', () => {
  it('should return true if A extends primitive', () => {
    type Ex1 = IsPrimitive<1>
    type Ex2 = IsPrimitive<'a'>
    type Ex3 = IsPrimitive<true>
    type Ex4 = IsPrimitive<null>
    type Ex5 = IsPrimitive<undefined>
    type Ex6 = IsPrimitive<bigint>
    type Ex7 = IsPrimitive<symbol>
    type Ex8 = IsPrimitive<number>
    type Ex9 = IsPrimitive<string>
    type Ex10 = IsPrimitive<boolean>

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

  it('should return false if A does not extend primitive', () => {
    type Ex1 = IsPrimitive<1[]>
    type Ex2 = IsPrimitive<{}>

    expectTypeOf<Ex1>().toEqualTypeOf<false>()
    expectTypeOf<Ex2>().toEqualTypeOf<false>()
  })

  it('should return boolean if A is a union that extends primitive', () => {
    type Ex1 = IsPrimitive<1 | []>
    type Ex2 = IsPrimitive<number | {}>
    type Ex3 = IsPrimitive<boolean | Map<number, number>>

    expectTypeOf<Ex1>().toEqualTypeOf<boolean>()
    expectTypeOf<Ex2>().toEqualTypeOf<boolean>()
    expectTypeOf<Ex3>().toEqualTypeOf<boolean>()
  })
})
