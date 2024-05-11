import { describe, expectTypeOf, it } from 'vitest'
import { IsLiteralBoolean } from './is-literal-boolean'

describe('IsLiteralBoolean', () => {
  it('should evaluate if `A` is a literal boolean', () => {
    type Ex1 = IsLiteralBoolean<true>
    type Ex2 = IsLiteralBoolean<false>

    expectTypeOf<Ex1>().toEqualTypeOf<true>()
    expectTypeOf<Ex2>().toEqualTypeOf<true>()
  })

  it('should evaluate if `A` is not a literal boolean', () => {
    type Ex1 = IsLiteralBoolean<boolean>
    type Ex2 = IsLiteralBoolean<null>
    type Ex3 = IsLiteralBoolean<{}>

    expectTypeOf<Ex1>().toEqualTypeOf<false>()
    expectTypeOf<Ex2>().toEqualTypeOf<false>()
    expectTypeOf<Ex3>().toEqualTypeOf<false>()
  })
})
