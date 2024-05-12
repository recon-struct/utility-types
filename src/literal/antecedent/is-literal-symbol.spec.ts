import { describe, expectTypeOf, it } from 'vitest'
import type { IsLiteralSymbol } from '~/literal/antecedent/is-literal-symbol'

describe('IsLiteralSymbol', () => {
  it('should evaluate if `A` is a literal symbol', () => {
    const MY_SYMBOL = Symbol('my-symbol')

    type Ex1 = IsLiteralSymbol<typeof MY_SYMBOL>

    expectTypeOf<Ex1>().toEqualTypeOf<true>()
  })

  it('should evaluate if `A` is not a literal symbol', () => {
    type Ex1 = IsLiteralSymbol<symbol>
    type Ex2 = IsLiteralSymbol<null>
    type Ex3 = IsLiteralSymbol<{}>
    type Ex4 = IsLiteralSymbol<true>
    type Ex5 = IsLiteralSymbol<false>

    expectTypeOf<Ex1>().toEqualTypeOf<false>()
    expectTypeOf<Ex2>().toEqualTypeOf<false>()
    expectTypeOf<Ex3>().toEqualTypeOf<false>()
    expectTypeOf<Ex4>().toEqualTypeOf<false>()
    expectTypeOf<Ex5>().toEqualTypeOf<false>()
  })
})
