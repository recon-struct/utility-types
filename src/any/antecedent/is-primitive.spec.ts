import { describe, it } from 'bun:test'
import type { IsPrimitive } from '~/any/antecedent/is-primitive'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'

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

    type TestEx1 = Expect<IsEqual<Ex1, true>>
    type TestEx2 = Expect<IsEqual<Ex2, true>>
    type TestEx3 = Expect<IsEqual<Ex3, true>>
    type TestEx4 = Expect<IsEqual<Ex4, true>>
    type TestEx5 = Expect<IsEqual<Ex5, true>>
    type TestEx6 = Expect<IsEqual<Ex6, true>>
    type TestEx7 = Expect<IsEqual<Ex7, true>>
    type TestEx8 = Expect<IsEqual<Ex8, true>>
    type TestEx9 = Expect<IsEqual<Ex9, true>>
    type TestEx10 = Expect<IsEqual<Ex10, true>>
  })

  it('should return false if A does not extend primitive', () => {
    type Ex1 = IsPrimitive<1[]>
    type Ex2 = IsPrimitive<{}>

    type TestEx1 = Expect<IsEqual<Ex1, false>>
    type TestEx2 = Expect<IsEqual<Ex2, false>>
  })

  it('should return boolean if A is a union that extends primitive', () => {
    type Ex1 = IsPrimitive<1 | []>
    type Ex2 = IsPrimitive<number | {}>
    type Ex3 = IsPrimitive<boolean | Map<number, number>>

    type TestEx1 = Expect<IsEqual<Ex1, boolean>>
    type TestEx2 = Expect<IsEqual<Ex2, boolean>>
    type TestEx3 = Expect<IsEqual<Ex3, boolean>>
  })
})
