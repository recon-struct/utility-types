import { describe, expectTypeOf, it } from 'vitest'
import type { IsLiteralString } from '~/literal/antecedent/is-literal-string'

describe('IsLiteralString', () => {
  it('should evaluate if `A` is a literal string', () => {
    type Ex1 = IsLiteralString<'hello'>
    type Ex2 = IsLiteralString<'world'>

    expectTypeOf<Ex1>().toEqualTypeOf<true>()
    expectTypeOf<Ex2>().toEqualTypeOf<true>()
  })

  it('should evaluate if `A` is not a literal string', () => {
    type Ex1 = IsLiteralString<string>
    type Ex2 = IsLiteralString<null>
    type Ex3 = IsLiteralString<{}>

    expectTypeOf<Ex1>().toEqualTypeOf<false>()
    expectTypeOf<Ex2>().toEqualTypeOf<false>()
    expectTypeOf<Ex3>().toEqualTypeOf<false>()
  })
})
