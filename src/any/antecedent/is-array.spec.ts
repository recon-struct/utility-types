import type { IsArray } from '~/any/antecedent/is-array'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'

describe('IsArray', () => {
  it('should return true if A extends any[]', () => {
    type Ex1 = IsArray<[]>
    type Ex2 = IsArray<[1]>
    type Ex3 = IsArray<any[]>
    type Ex4 = IsArray<readonly any[]>
    type Ex5 = IsArray<ReadonlyArray<any>>
    type Ex6 = IsArray<Readonly<any[]>>
    type Ex7 = IsArray<Readonly<any>[]>
    type Ex8 = IsArray<ReadonlyArray<any>>
    type Ex9 = IsArray<ReadonlyArray<ReadonlyArray<any>>>
    type Ex10 = IsArray<ReadonlyArray<ReadonlyArray<ReadonlyArray<any>>>>

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

  it('should return false if A does not extend any[]', () => {
    type Ex1 = IsArray<1>
    type Ex2 = IsArray<number>
    type Ex3 = IsArray<string>
    type Ex4 = IsArray<boolean>
    type Ex5 = IsArray<bigint>
    type Ex6 = IsArray<1n>
    type Ex7 = IsArray<true>
    type Ex8 = IsArray<false>
    type Ex9 = IsArray<null>
    type Ex10 = IsArray<undefined>
    type Ex11 = IsArray<unknown>
    type Ex12 = IsArray<never>
    type Ex13 = IsArray<void>
    type Ex14 = IsArray<object>
    type Ex15 = IsArray<{}>
    type Ex16 = IsArray<() => void>

    type TestEx1 = Expect<IsEqual<Ex1, false>>
    type TestEx2 = Expect<IsEqual<Ex2, false>>
    type TestEx3 = Expect<IsEqual<Ex3, false>>
    type TestEx4 = Expect<IsEqual<Ex4, false>>
    type TestEx5 = Expect<IsEqual<Ex5, false>>
    type TestEx6 = Expect<IsEqual<Ex6, false>>
    type TestEx7 = Expect<IsEqual<Ex7, false>>
    type TestEx8 = Expect<IsEqual<Ex8, false>>
    type TestEx9 = Expect<IsEqual<Ex9, false>>
    type TestEx10 = Expect<IsEqual<Ex10, false>>
    type TestEx11 = Expect<IsEqual<Ex11, false>>
    type TestEx12 = Expect<IsEqual<Ex12, false>>
    type TestEx13 = Expect<IsEqual<Ex13, false>>
    type TestEx14 = Expect<IsEqual<Ex14, false>>
    type TestEx15 = Expect<IsEqual<Ex15, false>>
    type TestEx16 = Expect<IsEqual<Ex16, false>>
  })

  it('should return boolean if A is a union that extends any[]', () => {
    type Ex1 = IsArray<1 | []>
    type Ex2 = IsArray<number | []>
    type Ex3 = IsArray<string | []>
    type Ex4 = IsArray<boolean | []>
    type Ex5 = IsArray<bigint | []>
    type Ex6 = IsArray<1n | []>
    type Ex7 = IsArray<true | []>
    type Ex8 = IsArray<false | []>
    type Ex9 = IsArray<null | []>
    type Ex10 = IsArray<undefined | []>
    type Ex11 = IsArray<void | []>
    type Ex12 = IsArray<object | []>
    type Ex13 = IsArray<{} | []>
    type Ex14 = IsArray<(() => void) | []>

    type TestEx1 = Expect<IsEqual<Ex1, boolean>>
    type TestEx2 = Expect<IsEqual<Ex2, boolean>>
    type TestEx3 = Expect<IsEqual<Ex3, boolean>>
    type TestEx4 = Expect<IsEqual<Ex4, boolean>>
    type TestEx5 = Expect<IsEqual<Ex5, boolean>>
    type TestEx6 = Expect<IsEqual<Ex6, boolean>>
    type TestEx7 = Expect<IsEqual<Ex7, boolean>>
    type TestEx8 = Expect<IsEqual<Ex8, boolean>>
    type TestEx9 = Expect<IsEqual<Ex9, boolean>>
    type TestEx10 = Expect<IsEqual<Ex10, boolean>>
    type TestEx11 = Expect<IsEqual<Ex11, boolean>>
    type TestEx12 = Expect<IsEqual<Ex12, boolean>>
    type TestEx13 = Expect<IsEqual<Ex13, boolean>>
    type TestEx14 = Expect<IsEqual<Ex14, boolean>>
  })
})
