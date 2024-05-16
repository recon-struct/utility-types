import { describe, expectTypeOf, it } from 'vitest'
import type { Capture } from '~/string/capture'

describe('Capture', () => {
  it('should capture the start and end of a string', () => {
    type Ex1 = Capture<'hello {{world}}'>
    type Ex2 = Capture<'{{a}} {{b}} {{c}}'>

    expectTypeOf<Ex1>().toEqualTypeOf<'world'>()
    expectTypeOf<Ex2>().toEqualTypeOf<'a' | 'b' | 'c'>()
  })

  it('should capture the start and end of a string with custom capture group', () => {
    type Ex1 = Capture<'hello ${world}', { start: '${'; end: '}' }>
    type Ex2 = Capture<'${a} ${b} ${c}', { start: '${'; end: '}' }>

    expectTypeOf<Ex1>().toEqualTypeOf<'world'>()
    expectTypeOf<Ex2>().toEqualTypeOf<'a' | 'b' | 'c'>()
  })
})
