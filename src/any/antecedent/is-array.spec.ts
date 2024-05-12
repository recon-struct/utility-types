import { describe, expectTypeOf, it } from 'vitest'
import type { IsArray } from '~/any/antecedent/is-array'

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

    expectTypeOf<Ex1>().toEqualTypeOf<false>()
    expectTypeOf<Ex2>().toEqualTypeOf<false>()
    expectTypeOf<Ex3>().toEqualTypeOf<false>()
    expectTypeOf<Ex4>().toEqualTypeOf<false>()
    expectTypeOf<Ex5>().toEqualTypeOf<false>()
    expectTypeOf<Ex6>().toEqualTypeOf<false>()
    expectTypeOf<Ex7>().toEqualTypeOf<false>()
    expectTypeOf<Ex8>().toEqualTypeOf<false>()
    expectTypeOf<Ex9>().toEqualTypeOf<false>()
    expectTypeOf<Ex10>().toEqualTypeOf<false>()
    expectTypeOf<Ex11>().toEqualTypeOf<false>()
    expectTypeOf<Ex12>().toEqualTypeOf<false>()
    expectTypeOf<Ex13>().toEqualTypeOf<false>()
    expectTypeOf<Ex14>().toEqualTypeOf<false>()
    expectTypeOf<Ex15>().toEqualTypeOf<false>()
    expectTypeOf<Ex16>().toEqualTypeOf<false>()
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

    expectTypeOf<Ex1>().toEqualTypeOf<boolean>()
    expectTypeOf<Ex2>().toEqualTypeOf<boolean>()
    expectTypeOf<Ex3>().toEqualTypeOf<boolean>()
    expectTypeOf<Ex4>().toEqualTypeOf<boolean>()
    expectTypeOf<Ex5>().toEqualTypeOf<boolean>()
    expectTypeOf<Ex6>().toEqualTypeOf<boolean>()
    expectTypeOf<Ex7>().toEqualTypeOf<boolean>()
    expectTypeOf<Ex8>().toEqualTypeOf<boolean>()
    expectTypeOf<Ex9>().toEqualTypeOf<boolean>()
    expectTypeOf<Ex10>().toEqualTypeOf<boolean>()
    expectTypeOf<Ex11>().toEqualTypeOf<boolean>()
    expectTypeOf<Ex12>().toEqualTypeOf<boolean>()
    expectTypeOf<Ex13>().toEqualTypeOf<boolean>()
    expectTypeOf<Ex14>().toEqualTypeOf<boolean>()
  })
})
