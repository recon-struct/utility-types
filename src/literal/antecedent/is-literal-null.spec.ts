import { describe, expectTypeOf, it } from 'vitest'
import { IsLiteralNull } from './is-literal-null'

describe('IsLiteralNull', () => {
  it('should evaluate if `A` is a literal null', () => {
    type Ex1 = IsLiteralNull<null>

    expectTypeOf<Ex1>().toEqualTypeOf<true>()
  })

  it('should evaluate if `A` is not a literal null', () => {
    type Ex1 = IsLiteralNull<boolean>
    type Ex2 = IsLiteralNull<true>
    type Ex3 = IsLiteralNull<{}>
    type Ex4 = IsLiteralNull<undefined>
    type Ex5 = IsLiteralNull<0>
    type Ex6 = IsLiteralNull<''>

    expectTypeOf<Ex1>().toEqualTypeOf<false>()
    expectTypeOf<Ex2>().toEqualTypeOf<false>()
    expectTypeOf<Ex3>().toEqualTypeOf<false>()
    expectTypeOf<Ex4>().toEqualTypeOf<false>()
    expectTypeOf<Ex5>().toEqualTypeOf<false>()
    expectTypeOf<Ex6>().toEqualTypeOf<false>()
  })
})
