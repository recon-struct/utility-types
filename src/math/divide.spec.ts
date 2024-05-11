import { describe, expectTypeOf, it } from 'vitest'
import { Divide } from './divide'

describe('Divide', () => {
  it('should divide two numbers', () => {
    type Ex1 = Divide<4, 2>
    type Ex2 = Divide<6, 3>

    expectTypeOf<Ex1>().toEqualTypeOf<2>()
    expectTypeOf<Ex2>().toEqualTypeOf<2>()
  })
})
