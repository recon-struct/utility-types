import { describe, expectTypeOf, it } from 'vitest'
import type { Interpolation } from '~/string/interpolation'

describe('Interpolation', () => {
  it('should interpolate a string', () => {
    type Ex1 = Interpolation<'hello {{world}}', { world: 'world' }>
    type Ex2 = Interpolation<'{{a}} {{b}} {{c}}', { a: 'a'; b: 'b'; c: 'c' }>

    expectTypeOf<Ex1>().toEqualTypeOf<'hello world'>()
    expectTypeOf<Ex2>().toEqualTypeOf<'a b c'>()
  })
})
