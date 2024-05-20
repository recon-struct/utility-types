import type { First } from '~/tuple/first'
import { describe, expectTypeOf, it } from 'vitest'

describe('First', () => {
  it('should get the first element of `A`', () => {
    type Ex1 = First<['a', 'b', 'c']> // 'a'
    expectTypeOf<Ex1>().toEqualTypeOf<'a'>()
  })
})
