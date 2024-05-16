import { describe, expectTypeOf, it } from 'vitest'
import type { Split } from '~/string/split'

describe('Split', () => {
  it('should split a string', () => {
    type Ex1 = Split<'hello world', ' '>
    type Ex2 = Split<'hello world', 'o'>
    type Ex3 = Split<'hello world', 'l'>
    type Ex4 = Split<'hello world', 'd'>
    type Ex5 = Split<'hello world', 'h'>

    expectTypeOf<Ex1>().toEqualTypeOf<['hello', 'world']>()
    expectTypeOf<Ex2>().toEqualTypeOf<['hell', ' w', 'rld']>()
    expectTypeOf<Ex3>().toEqualTypeOf<['he', '', 'o wor', 'd']>()
    expectTypeOf<Ex4>().toEqualTypeOf<['hello worl', '']>()
    expectTypeOf<Ex5>().toEqualTypeOf<['', 'ello world']>()
  })
})
