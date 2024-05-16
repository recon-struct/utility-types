import { describe, expectTypeOf, it } from 'vitest'
import type { StringLength } from '~/string/string-length'

describe('StringLength', () => {
  it('should get the length of a string', () => {
    type Ex1 = StringLength<'hello'>
    type Ex2 = StringLength<'hello world'>
    type Ex3 = StringLength<'hello 123'>
    type Ex4 = StringLength<'hello world 123'>

    expectTypeOf<Ex1>().toEqualTypeOf<5>()
    expectTypeOf<Ex2>().toEqualTypeOf<11>()
    expectTypeOf<Ex3>().toEqualTypeOf<9>()
    expectTypeOf<Ex4>().toEqualTypeOf<15>()
  })
})
