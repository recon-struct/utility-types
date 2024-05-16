import { describe, expectTypeOf, it } from 'vitest'
import type { EndsWith } from '~/string/antecedent/ends-with'

describe('EndsWith', () => {
  it('should return true if `A` ends with `B`', () => {
    type Ex = EndsWith<'abc', 'c'>

    expectTypeOf<Ex>().toEqualTypeOf<true>()
  })

  it('should return false if `A` does not end with `B`', () => {
    type Ex = EndsWith<'abc', 'a'>

    expectTypeOf<Ex>().toEqualTypeOf<false>()
  })
})
