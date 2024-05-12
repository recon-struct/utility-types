import { describe, expectTypeOf, it } from 'vitest'
import type { IsLiteralPrimitive } from '~/literal/antecedent/is-literal-primitive'

describe('IsLiteralPrimitive', () => {
  it('should evaluate if `A` is a literal primitive', () => {
    const MY_SYMBOL = Symbol('my-symbol')

    type Ex1 = IsLiteralPrimitive<true>
    type Ex2 = IsLiteralPrimitive<false>
    type Ex3 = IsLiteralPrimitive<null>
    type Ex4 = IsLiteralPrimitive<undefined>
    type Ex5 = IsLiteralPrimitive<0>
    type Ex6 = IsLiteralPrimitive<'hello'>
    type Ex7 = IsLiteralPrimitive<1>
    type Ex8 = IsLiteralPrimitive<1n>
    type Ex9 = IsLiteralPrimitive<typeof MY_SYMBOL>

    expectTypeOf<Ex1>().toEqualTypeOf<true>()
    expectTypeOf<Ex2>().toEqualTypeOf<true>()
    expectTypeOf<Ex3>().toEqualTypeOf<true>()
    expectTypeOf<Ex4>().toEqualTypeOf<true>()
    expectTypeOf<Ex5>().toEqualTypeOf<true>()
    expectTypeOf<Ex6>().toEqualTypeOf<true>()
    expectTypeOf<Ex7>().toEqualTypeOf<true>()
    expectTypeOf<Ex8>().toEqualTypeOf<true>()
    expectTypeOf<Ex9>().toEqualTypeOf<true>()
  })

  it('should evaluate if `A` is not a literal primitive', () => {
    type Ex1 = IsLiteralPrimitive<boolean>
    type Ex2 = IsLiteralPrimitive<number>
    type Ex3 = IsLiteralPrimitive<bigint>
    type Ex4 = IsLiteralPrimitive<string>
    type Ex5 = IsLiteralPrimitive<symbol>
    type Ex6 = IsLiteralPrimitive<{}>

    expectTypeOf<Ex1>().toEqualTypeOf<false>()
    expectTypeOf<Ex2>().toEqualTypeOf<false>()
    expectTypeOf<Ex3>().toEqualTypeOf<false>()
    expectTypeOf<Ex4>().toEqualTypeOf<false>()
    expectTypeOf<Ex5>().toEqualTypeOf<false>()
    expectTypeOf<Ex6>().toEqualTypeOf<false>()
  })
})
