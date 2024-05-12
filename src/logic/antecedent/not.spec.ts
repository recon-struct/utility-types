import { describe, expectTypeOf, it } from 'vitest'
import type { Not } from '~/logic/antecedent/not'

describe('Not', () => {
  it('should evaluate `¬A`', () => {
    type Ex1 = Not<true>
    type Ex2 = Not<false>

    expectTypeOf<Ex1>().toEqualTypeOf<false>()
    expectTypeOf<Ex2>().toEqualTypeOf<true>()
  })
})
