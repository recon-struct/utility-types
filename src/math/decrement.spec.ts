import { describe, expectTypeOf, it } from 'vitest'
import type { Decrement } from '~/math/decrement'

describe('Decrement', () => {
  it('should decrement a number', () => {
    type Ex1 = Decrement<2>
    type Ex2 = Decrement<1>

    expectTypeOf<Ex1>().toEqualTypeOf<1>()
    expectTypeOf<Ex2>().toEqualTypeOf<0>()
  })
})
