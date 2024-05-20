import type { ElementOf } from '~/tuple/element-of'
import { describe, expectTypeOf, it } from 'vitest'

describe('ElementOf', () => {
  it('should get the elements of `A`', () => {
    type Ex1 = ElementOf<['a', 'b', 'c']> // 'a' | 'b' | 'c'
    expectTypeOf<Ex1>().toEqualTypeOf<'a' | 'b' | 'c'>()
  })
})