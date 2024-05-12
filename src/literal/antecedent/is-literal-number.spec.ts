import { describe, expectTypeOf, it } from 'vitest'
import type { IsLiteralNumber } from '~/literal/antecedent/is-literal-number'

describe('IsLiteralNumber', () => {
  it('should evaluate if `A` is a literal number', () => {
    type Ex1 = IsLiteralNumber<1>
    type Ex2 = IsLiteralNumber<0>
    type Ex3 = IsLiteralNumber<-1>
    type Ex4 = IsLiteralNumber<1n>
    type Ex5 = IsLiteralNumber<0n>
    type Ex6 = IsLiteralNumber<-1n>

    expectTypeOf<Ex1>().toEqualTypeOf<true>()
    expectTypeOf<Ex2>().toEqualTypeOf<true>()
    expectTypeOf<Ex3>().toEqualTypeOf<true>()
    expectTypeOf<Ex4>().toEqualTypeOf<false>()
    expectTypeOf<Ex5>().toEqualTypeOf<false>()
    expectTypeOf<Ex6>().toEqualTypeOf<false>()
  })

  it('should evaluate if `A` is not a literal number', () => {
    type Ex1 = IsLiteralNumber<number>
    type Ex2 = IsLiteralNumber<bigint>
    type Ex3 = IsLiteralNumber<null>
    type Ex4 = IsLiteralNumber<{}>
    type Ex5 = IsLiteralNumber<true>
    type Ex6 = IsLiteralNumber<false>
    type Ex7 = IsLiteralNumber<boolean>

    expectTypeOf<Ex1>().toEqualTypeOf<false>()
    expectTypeOf<Ex2>().toEqualTypeOf<false>()
    expectTypeOf<Ex3>().toEqualTypeOf<false>()
    expectTypeOf<Ex4>().toEqualTypeOf<false>()
    expectTypeOf<Ex5>().toEqualTypeOf<false>()
    expectTypeOf<Ex6>().toEqualTypeOf<false>()
    expectTypeOf<Ex7>().toEqualTypeOf<false>()
  })
})
