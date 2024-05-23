import { describe, it } from 'bun:test'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'
import type { IsGreaterThan } from '~/math/antecedent/is-greater-than'

describe('IsGreaterThan', () => {
  it('should equal false', () => {
    type TestIsGreaterThan = Expect<IsEqual<IsGreaterThan<1, 2>, false>>
  })
  it('should equal true', () => {
    type TestIsGreaterThan = Expect<IsEqual<IsGreaterThan<2, 1>, true>>
  })
  it('should equal false', () => {
    type TestIsGreaterThan = Expect<IsEqual<IsGreaterThan<1, 1>, false>>
  })
})
