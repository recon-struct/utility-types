import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/expect'
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

    type TestEx1 = Expect<IsEqual<Ex1, true>>
    type TestEx2 = Expect<IsEqual<Ex2, true>>
    type TestEx3 = Expect<IsEqual<Ex3, true>>
    type TestEx4 = Expect<IsEqual<Ex4, true>>
    type TestEx5 = Expect<IsEqual<Ex5, true>>
    type TestEx6 = Expect<IsEqual<Ex6, true>>
    type TestEx7 = Expect<IsEqual<Ex7, true>>
    type TestEx8 = Expect<IsEqual<Ex8, true>>
    type TestEx9 = Expect<IsEqual<Ex9, true>>
  })

  it('should evaluate if `A` is not a literal primitive', () => {
    type Ex1 = IsLiteralPrimitive<boolean>
    type Ex2 = IsLiteralPrimitive<number>
    type Ex3 = IsLiteralPrimitive<bigint>
    type Ex4 = IsLiteralPrimitive<string>
    type Ex5 = IsLiteralPrimitive<symbol>
    type Ex6 = IsLiteralPrimitive<{}>

    type TestEx1 = Expect<IsEqual<Ex1, false>>
    type TestEx2 = Expect<IsEqual<Ex2, false>>
    type TestEx3 = Expect<IsEqual<Ex3, false>>
    type TestEx4 = Expect<IsEqual<Ex4, false>>
    type TestEx5 = Expect<IsEqual<Ex5, false>>
    type TestEx6 = Expect<IsEqual<Ex6, false>>
  })
})
