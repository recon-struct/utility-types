import { describe, expectTypeOf, it } from 'vitest'
import type { Add } from '~/math/add'

describe('Add', () => {
  it('should add two numbers', () => {
    type Ex1 = Add<1, 2>
    type Ex2 = Add<2, 3>

    expectTypeOf<Ex1>().toEqualTypeOf<3>()
    expectTypeOf<Ex2>().toEqualTypeOf<5>()
  })
})
