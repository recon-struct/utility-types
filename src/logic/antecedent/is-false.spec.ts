import { describe, expectTypeOf, it } from 'vitest'
import type { IsFalse } from '~/logic/antecedent/is-false'

describe('IsFalse', () => {
  it('should evaluate `¬A`', () => {
    type Ex1 = IsFalse<true>
    type Ex2 = IsFalse<false>

    expectTypeOf<Ex1>().toEqualTypeOf<false>()
    expectTypeOf<Ex2>().toEqualTypeOf<true>()
  })
})
