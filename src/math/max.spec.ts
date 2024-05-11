import { describe, expectTypeOf, it } from 'vitest'
import { Max } from './max'

describe('Max', () => {
  it('should return the larger of two numbers', () => {
    type Ex1 = Max<1, 2>
    type Ex2 = Max<2, 1>

    expectTypeOf<Ex1>().toEqualTypeOf<2>()
    expectTypeOf<Ex2>().toEqualTypeOf<2>()
  })
})
