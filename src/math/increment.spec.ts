import { describe, expectTypeOf, it } from 'vitest'
import type { Increment } from '~/math/increment'

describe('Increment', () => {
  it('should increment a number', () => {
    type Ex1 = Increment<0>
    type Ex2 = Increment<1>

    expectTypeOf<Ex1>().toEqualTypeOf<1>()
    expectTypeOf<Ex2>().toEqualTypeOf<2>()
  })
})
