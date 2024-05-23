import { describe, it } from 'bun:test'
import type { IsSymbol } from '~/any/antecedent/primitives/is-symbol'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'

describe('IsSymbol', () => {
  it('should return true if A extends symbol', () => {
    const MY_SYMBOL = Symbol('my_symbol')
    type Ex1 = IsSymbol<typeof MY_SYMBOL>
    type Ex2 = IsSymbol<symbol>

    type TestEx1 = Expect<IsEqual<Ex1, true>>
    type TestEx2 = Expect<IsEqual<Ex2, true>>
  })

  it('should return false if A does not extend symbol', () => {
    type Ex1 = IsSymbol<1>
    type Ex2 = IsSymbol<number>

    type TestEx1 = Expect<IsEqual<Ex1, false>>
    type TestEx2 = Expect<IsEqual<Ex2, false>>
  })

  it('should return boolean if A is a union that extends symbol', () => {
    const MY_SYMBOL = Symbol('my_symbol')
    type Ex1 = IsSymbol<1 | typeof MY_SYMBOL>
    type Ex2 = IsSymbol<number | symbol>

    type TestEx1 = Expect<IsEqual<Ex1, boolean>>
    type TestEx2 = Expect<IsEqual<Ex2, boolean>>
  })
})
