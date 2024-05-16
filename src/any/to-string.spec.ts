import { describe, expectTypeOf, it } from 'vitest'
import type { ToString } from '~/any/to-string'

describe('ToString', () => {
  it('should convert `A` to a string', () => {
    type Ex1 = ToString<123>
    type Ex2 = ToString<'hello'>
    type Ex3 = ToString<true>
    type Ex4 = ToString<false>
    type Ex5 = ToString<null>
    type Ex6 = ToString<undefined>
    type Ex9 = ToString<{ toString(): '123' }>

    expectTypeOf<Ex1>().toEqualTypeOf<'123'>()
    expectTypeOf<Ex2>().toEqualTypeOf<'hello'>()
    expectTypeOf<Ex3>().toEqualTypeOf<'true'>()
    expectTypeOf<Ex4>().toEqualTypeOf<'false'>()
    expectTypeOf<Ex5>().toEqualTypeOf<'null'>()
    expectTypeOf<Ex6>().toEqualTypeOf<'undefined'>()
    expectTypeOf<Ex9>().toEqualTypeOf<'123'>()
  })
})
