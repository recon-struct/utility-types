import type { Push } from '~/tuple/push'
import { describe, expectTypeOf, it } from 'vitest'

describe('Push', () => {
  it('should push `B` onto `A`', () => {
    type Ex1 = Push<['a', 'b'], 'c'> // ['a', 'b', 'c']
    expectTypeOf<Ex1>().toEqualTypeOf<['a', 'b', 'c']>()
  })
})