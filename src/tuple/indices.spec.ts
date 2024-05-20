import type { Indices } from '~/tuple/indices'
import { describe, expectTypeOf, it } from 'vitest'

describe('Indices', () => {
  it('should get the indices of `A`', () => {
    type Ex1 = Indices<['a', 'b', 'c']> // 0 | 1 | 2
    expectTypeOf<Ex1>().toEqualTypeOf<'0' | '1' | '2'>()
  })
})