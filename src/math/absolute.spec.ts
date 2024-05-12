import { describe, expectTypeOf, it } from 'vitest'
import type { Absolute } from '~/math/absolute'

describe('Absolute', () => {
  it('should return the absolute value of a number', () => {
    type Ex1 = Absolute<0>
    type Ex2 = Absolute<-1>
    type Ex3 = Absolute<1>

    expectTypeOf<Ex1>().toEqualTypeOf<0>()
    expectTypeOf<Ex2>().toEqualTypeOf<1>()
    expectTypeOf<Ex3>().toEqualTypeOf<1>()
  })
})
