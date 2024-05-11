import { describe, expectTypeOf, it } from 'vitest'
import { IsLiteralBigInt } from './is-literal-bigint'

describe('IsLiteralBigInt', () => {
  it('should evaluate if `A` is a literal bigint', () => {
    type Ex1 = IsLiteralBigInt<1n>
    type Ex2 = IsLiteralBigInt<0n>
    type Ex3 = IsLiteralBigInt<-1n>

    expectTypeOf<Ex1>().toEqualTypeOf<true>()
    expectTypeOf<Ex2>().toEqualTypeOf<true>()
    expectTypeOf<Ex3>().toEqualTypeOf<true>()
  })

  it('should evaluate if `A` is not a literal bigint', () => {
    type Ex1 = IsLiteralBigInt<bigint>
    type Ex2 = IsLiteralBigInt<number>
    type Ex3 = IsLiteralBigInt<null>
    type Ex4 = IsLiteralBigInt<1>
    type Ex5 = IsLiteralBigInt<true>
    type Ex6 = IsLiteralBigInt<false>

    expectTypeOf<Ex1>().toEqualTypeOf<false>()
    expectTypeOf<Ex2>().toEqualTypeOf<false>()
    expectTypeOf<Ex3>().toEqualTypeOf<false>()
    expectTypeOf<Ex4>().toEqualTypeOf<false>()
    expectTypeOf<Ex5>().toEqualTypeOf<false>()
    expectTypeOf<Ex6>().toEqualTypeOf<false>()
  })
})
