import { describe, expectTypeOf, it } from 'vitest'
import type { StartsWith } from '~/string/antecedent/starts-with'

describe('StartsWith', () => {
  it('should return true if `A` starts with `B`', () => {
    type Ex1 = StartsWith<'abc', 'a'>
    type Ex2 = StartsWith<'abc', 'ab'>
    type Ex3 = StartsWith<'abc', 'abc'>

    expectTypeOf<Ex1>().toEqualTypeOf<true>()
    expectTypeOf<Ex2>().toEqualTypeOf<true>()
    expectTypeOf<Ex3>().toEqualTypeOf<true>()
  })

  it('should return false if `A` does not start with `B`', () => {
    type Ex1 = StartsWith<'abc', 'b'>
    type Ex2 = StartsWith<'abc', 'bc'>
    type Ex3 = StartsWith<'abc', 'c'>

    expectTypeOf<Ex1>().toEqualTypeOf<false>()
    expectTypeOf<Ex2>().toEqualTypeOf<false>()
    expectTypeOf<Ex3>().toEqualTypeOf<false>()
  })
})
