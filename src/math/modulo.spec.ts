import { describe, expectTypeOf, it } from 'vitest'
import { Modulo } from './modulo'

describe('Modulo', () => {
  it('should return the remainder of a division', () => {
    type Ex1 = Modulo<5, 2>
    type Ex2 = Modulo<10, 3>
    type Ex3 = Modulo<10, 5>

    expectTypeOf<Ex1>().toEqualTypeOf<1>()
    expectTypeOf<Ex2>().toEqualTypeOf<1>()
    expectTypeOf<Ex3>().toEqualTypeOf<0>()
  })
})
