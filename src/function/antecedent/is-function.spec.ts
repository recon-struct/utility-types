import { describe, expectTypeOf, it } from 'vitest'
import type { IsFunction } from '~/function/antecedent/is-function'

describe('IsFunction', () => {
  it('should return true if the function is a function', () => {
    type Ex1 = IsFunction<() => void>

    expectTypeOf<Ex1>().toEqualTypeOf<true>()
  })

  it('should return false if the function is not a function', () => {
    type Ex1 = IsFunction<1>
    type Ex2 = IsFunction<true>
    type Ex3 = IsFunction<'hello'>
    type Ex4 = IsFunction<{}>
    type Ex5 = IsFunction<undefined>
    type Ex6 = IsFunction<null>
    type Ex7 = IsFunction<bigint>
    type Ex8 = IsFunction<symbol>
    type Ex9 = IsFunction<[]>
    type Ex10 = IsFunction<Set<any>>
    type Ex11 = IsFunction<new () => void>

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
  })
})
