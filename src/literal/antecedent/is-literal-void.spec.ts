import { describe, expectTypeOf, it } from 'vitest'
import type { IsLiteralVoid } from '~/literal/antecedent/is-literal-void'

describe('IsLiteralVoid', () => {
  it('should evaluate if `A` is a literal void', () => {
    type Ex1 = IsLiteralVoid<void>

    expectTypeOf<Ex1>().toEqualTypeOf<true>()
  })

  it('should evaluate if `A` is not a literal void', () => {
    type Ex1 = IsLiteralVoid<boolean>
    type Ex2 = IsLiteralVoid<null>
    type Ex3 = IsLiteralVoid<{}>
    type Ex4 = IsLiteralVoid<undefined>
    type Ex5 = IsLiteralVoid<never>
    type Ex6 = IsLiteralVoid<unknown>
    type Ex7 = IsLiteralVoid<any>

    expectTypeOf<Ex1>().toEqualTypeOf<false>()
    expectTypeOf<Ex2>().toEqualTypeOf<false>()
    expectTypeOf<Ex3>().toEqualTypeOf<false>()
    expectTypeOf<Ex4>().toEqualTypeOf<false>()
    expectTypeOf<Ex5>().toEqualTypeOf<false>()
    expectTypeOf<Ex6>().toEqualTypeOf<false>()
    expectTypeOf<Ex7>().toEqualTypeOf<false>()
  })
})
