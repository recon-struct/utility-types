import { describe, it } from 'bun:test'
import type { AnyDecimalDigit } from '~/any/any-decimal-digit'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'

describe('AnyDecimalDigit', () => {
  it('should be a decimal digit', () => {
    type Ex = AnyDecimalDigit

    type TestEx = Expect<IsEqual<Ex, 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9>>
  })
})
