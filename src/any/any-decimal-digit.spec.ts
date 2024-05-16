import { describe, expectTypeOf, it } from 'vitest'
import type { AnyDecimalDigit } from '~/any/any-decimal-digit'

describe('AnyDecimalDigit', () => {
  it('should be a decimal digit', () => {
    type Ex = AnyDecimalDigit

    expectTypeOf<Ex>().toEqualTypeOf<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9>()
  })
})
