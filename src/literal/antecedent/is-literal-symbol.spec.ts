import { describe, it } from 'bun:test'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'
import type { IsLiteralSymbol } from '~/literal/antecedent/is-literal-symbol'

describe('IsLiteralSymbol', () => {
  it('should evaluate if `A` is a literal symbol', () => {
    const MY_SYMBOL = Symbol('my-symbol')

    type Ex1 = IsLiteralSymbol<typeof MY_SYMBOL>

    type TestEx1 = Expect<IsEqual<Ex1, true>>
  })

  it('should evaluate if `A` is not a literal symbol', () => {
    type Ex1 = IsLiteralSymbol<symbol>
    type Ex2 = IsLiteralSymbol<null>
    type Ex3 = IsLiteralSymbol<{}>
    type Ex4 = IsLiteralSymbol<true>
    type Ex5 = IsLiteralSymbol<false>

    type TestEx1 = Expect<IsEqual<Ex1, false>>
    type TestEx2 = Expect<IsEqual<Ex2, false>>
    type TestEx3 = Expect<IsEqual<Ex3, false>>
    type TestEx4 = Expect<IsEqual<Ex4, false>>
    type TestEx5 = Expect<IsEqual<Ex5, false>>
  })
})
