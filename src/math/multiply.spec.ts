import { describe, expectTypeOf, it } from 'vitest'
import { Multiply } from './multiply'

describe('Multiply', () => {
  it('should multiply two numbers', () => {
    type Ex1 = Multiply<1, 2>
    type Ex2 = Multiply<2, 3>

    expectTypeOf<Ex1>().toEqualTypeOf<2>()
    expectTypeOf<Ex2>().toEqualTypeOf<6>()
  })
})
