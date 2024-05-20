import type { Reverse } from '~/tuple/reverse'
import { describe, expectTypeOf, it } from 'vitest'

describe('Reverse', () => {
  it('should reverse the elements of `A`', () => {
    type Ex1 = Reverse<['a', 'b', 'c']> // ['c', 'b', 'a']
    expectTypeOf<Ex1>().toEqualTypeOf<['c', 'b', 'a']>()
  })
})