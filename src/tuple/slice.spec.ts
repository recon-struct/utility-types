import type { Slice } from '~/tuple/slice'
import { describe, expectTypeOf, it } from 'vitest'

describe('Slice', () => {
  it('should slice the elements of `A`', () => {
    type Ex1 = Slice<['a', 'b', 'c', 'd', 'e'], 1, 3> // ['b', 'c']
    expectTypeOf<Ex1>().toEqualTypeOf<['b', 'c']>()
  })
})