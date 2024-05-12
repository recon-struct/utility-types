import { describe, expectTypeOf, it } from 'vitest'
import type { IsLiteralKey } from '~/literal/antecedent/is-literal-key'

describe('IsLiteralKey', () => {
  it('should evaluate if `A` is a literal key', () => {
    const MY_SYMBOL = Symbol('my-symbol')
    type Ex1 = IsLiteralKey<'a'>
    type Ex2 = IsLiteralKey<42>
    type Ex3 = IsLiteralKey<typeof MY_SYMBOL>

    expectTypeOf<Ex1>().toEqualTypeOf<true>()
    expectTypeOf<Ex2>().toEqualTypeOf<true>()
    expectTypeOf<Ex3>().toEqualTypeOf<true>()
  })

  it('should evaluate if `A` is not a literal key', () => {
    type Ex1 = IsLiteralKey<string>
    type Ex2 = IsLiteralKey<null>
    type Ex3 = IsLiteralKey<{}>
    type Ex4 = IsLiteralKey<true>
    type Ex5 = IsLiteralKey<false>

    expectTypeOf<Ex1>().toEqualTypeOf<false>()
    expectTypeOf<Ex2>().toEqualTypeOf<false>()
    expectTypeOf<Ex3>().toEqualTypeOf<false>()
    expectTypeOf<Ex4>().toEqualTypeOf<false>()
    expectTypeOf<Ex5>().toEqualTypeOf<false>()
  })
})
