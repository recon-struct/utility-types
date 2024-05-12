import { describe, expectTypeOf, it } from 'vitest'
import type { IsSymbol } from '~/any/antecedent/primitives/is-symbol'

describe('IsSymbol', () => {
  it('should return true if A extends symbol', () => {
    const MY_SYMBOL = Symbol('my_symbol')
    type Ex1 = IsSymbol<typeof MY_SYMBOL>
    type Ex2 = IsSymbol<symbol>

    expectTypeOf<Ex1>().toEqualTypeOf<true>()
    expectTypeOf<Ex2>().toEqualTypeOf<true>()
  })

  it('should return false if A does not extend symbol', () => {
    type Ex1 = IsSymbol<1>
    type Ex2 = IsSymbol<number>

    expectTypeOf<Ex1>().toEqualTypeOf<false>()
    expectTypeOf<Ex2>().toEqualTypeOf<false>()
  })

  it('should return boolean if A is a union that extends symbol', () => {
    const MY_SYMBOL = Symbol('my_symbol')
    type Ex1 = IsSymbol<1 | typeof MY_SYMBOL>
    type Ex2 = IsSymbol<number | symbol>

    expectTypeOf<Ex1>().toEqualTypeOf<boolean>()
    expectTypeOf<Ex2>().toEqualTypeOf<boolean>()
  })
})
