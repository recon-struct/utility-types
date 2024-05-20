import type { Join } from '~/tuple/join'
import { describe, expectTypeOf, it } from 'vitest'

describe('Join', () => {
  it('should join `A` and `B`', () => {
    type Ex1 = Join<['a', 'b', 'c']>
    expectTypeOf<Ex1>().toEqualTypeOf<'abc'>()
  })

  it('should join `A` and `B` with a separator', () => {
    type Ex1 = Join<['a', 'b', 'c'], '-'>
    expectTypeOf<Ex1>().toEqualTypeOf<'a-b-c'>()
  })
})