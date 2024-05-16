import { describe, expectTypeOf, it } from 'vitest'
import type { LowerCase } from '~/string/lower-case'

describe('LowerCase', () => {
  it('should convert a string to lower case', () => {
    type Ex1 = LowerCase<'Hello'>
    type Ex2 = LowerCase<'Hello World'>
    type Ex3 = LowerCase<'Hello 123'>
    type Ex4 = LowerCase<'Hello World 123'>

    expectTypeOf<Ex1>().toEqualTypeOf<'hello'>()
    expectTypeOf<Ex2>().toEqualTypeOf<'hello world'>()
    expectTypeOf<Ex3>().toEqualTypeOf<'hello 123'>()
    expectTypeOf<Ex4>().toEqualTypeOf<'hello world 123'>()
  })
})
