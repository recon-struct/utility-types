import type { Rest } from '~/tuple/rest'
import { describe, expectTypeOf, it } from 'vitest'

describe('Rest', () => {
  it('should get the rest of the elements of `A`', () => {
    type Ex1 = Rest<['a', 'b', 'c']> // ['b', 'c']
    expectTypeOf<Ex1>().toEqualTypeOf<['b', 'c']>()
  })
})