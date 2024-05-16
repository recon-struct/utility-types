import { describe, expectTypeOf, it } from 'vitest'
import type { UpperCase } from '~/string/upper-case'

describe('UpperCase', () => {
  it('should convert a string to upper case', () => {
    type Ex1 = UpperCase<'hello'>
    type Ex2 = UpperCase<'hello world'>
    type Ex3 = UpperCase<'hello 123'>
    type Ex4 = UpperCase<'hello world 123'>

    expectTypeOf<Ex1>().toEqualTypeOf<'HELLO'>()
    expectTypeOf<Ex2>().toEqualTypeOf<'HELLO WORLD'>()
    expectTypeOf<Ex3>().toEqualTypeOf<'HELLO 123'>()
    expectTypeOf<Ex4>().toEqualTypeOf<'HELLO WORLD 123'>()
  })
})
