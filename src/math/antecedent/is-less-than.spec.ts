import { describe, it } from 'bun:test'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'
import type { IsLessThan } from '~/math/antecedent/is-less-than'

describe('IsLessThan', () => {
  it('should equal false', () => {
    type TestIsLessThan = Expect<IsEqual<IsLessThan<1, 0>, false>>
  })
  it('should equal true', () => {
    type TestIsLessThan = Expect<IsEqual<IsLessThan<0, 1>, true>>
  })
  it('should equal false', () => {
    type TestIsLessThan = Expect<IsEqual<IsLessThan<0, 0>, false>>
  })
})
