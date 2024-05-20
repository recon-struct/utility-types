import type { Last } from '~/tuple/last'
import { describe, expectTypeOf, it } from 'vitest'

describe('Last', () => {
  it('should get the last element of `A`', () => {
    type Ex1 = Last<['a', 'b', 'c']> // 'c'
    expectTypeOf<Ex1>().toEqualTypeOf<'c'>()
  })
})