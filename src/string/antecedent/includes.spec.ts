import { describe, expectTypeOf, it } from 'vitest'
import type { Includes } from '~/string/antecedent/includes'

describe('Includes', () => {
  it('should return true if `A` includes `B`', () => {
    type Ex = Includes<'abc', 'b'>

    expectTypeOf<Ex>().toEqualTypeOf<true>()
  })

  it('should return false if `A` does not include `B`', () => {
    type Ex = Includes<'abc', 'd'>

    expectTypeOf<Ex>().toEqualTypeOf<false>()
  })
})
