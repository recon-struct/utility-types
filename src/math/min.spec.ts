import { describe, expectTypeOf, it } from 'vitest'
import { Min } from './min'

describe('Min', () => {
  it('should return the minimum of two numbers', () => {
    type Ex1 = Min<1, 2>
    type Ex2 = Min<2, 1>

    expectTypeOf<Ex1>().toEqualTypeOf<1>()
    expectTypeOf<Ex2>().toEqualTypeOf<1>()
  })
})
