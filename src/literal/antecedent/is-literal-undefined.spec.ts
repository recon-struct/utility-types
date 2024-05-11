import { describe, expectTypeOf, it } from 'vitest'
import { IsLiteralUndefined } from './is-literal-undefined'

describe('IsLiteralUndefined', () => {
  it('should evaluate if `A` is a literal undefined', () => {
    type Ex1 = IsLiteralUndefined<undefined>

    expectTypeOf<Ex1>().toEqualTypeOf<true>()
  })

  it('should evaluate if `A` is not a literal undefined', () => {
    type Ex1 = IsLiteralUndefined<boolean>
    type Ex2 = IsLiteralUndefined<true>
    type Ex3 = IsLiteralUndefined<{}>
    type Ex4 = IsLiteralUndefined<null>
    type Ex5 = IsLiteralUndefined<0>
    type Ex6 = IsLiteralUndefined<''>

    expectTypeOf<Ex1>().toEqualTypeOf<false>()
    expectTypeOf<Ex2>().toEqualTypeOf<false>()
    expectTypeOf<Ex3>().toEqualTypeOf<false>()
    expectTypeOf<Ex4>().toEqualTypeOf<false>()
    expectTypeOf<Ex5>().toEqualTypeOf<false>()
    expectTypeOf<Ex6>().toEqualTypeOf<false>()
  })
})
