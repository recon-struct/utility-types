import { describe, expectTypeOf, it } from 'vitest'
import type { Subtract } from '~/math/subtract'

describe('Subtract', () => {
  it('should subtract two numbers', () => {
    type Ex1 = Subtract<3, 2>
    type Ex2 = Subtract<5, 3>

    expectTypeOf<Ex1>().toEqualTypeOf<1>()
    expectTypeOf<Ex2>().toEqualTypeOf<2>()
  })
})
