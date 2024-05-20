import type { Concat } from '~/tuple/concat'
import { describe, expectTypeOf, it } from 'vitest'

describe('Concat', () => {
  it('should concatenate `A` and `B`', () => {
    type Ex1 = Concat<['a', 'b', 'c'], [1, 2, 3]> // ["a", "b", "c", 1, 2, 3]
    expectTypeOf<Ex1>().toEqualTypeOf<['a', 'b', 'c', 1, 2, 3]>()
  })
})