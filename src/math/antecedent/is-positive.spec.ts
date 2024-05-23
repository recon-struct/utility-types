import { describe, it } from 'bun:test'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'
import type { IsPositive } from '~/math/antecedent/is-positive'

describe('IsPositive', () => {
  it('should return true for positive numbers', () => {
    type TestIsPositive = Expect<IsEqual<IsPositive<1>, true>>
  })

  it('should return false for negative numbers', () => {
    type TestIsPositive = Expect<IsEqual<IsPositive<-1>, false>>
  })

  it('should return false for 0', () => {
    type TestIsPositive = Expect<IsEqual<IsPositive<0>, false>>
  })
})
