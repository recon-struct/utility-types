import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/expect'
import type { IsNonNegative } from './is-non-negative'

describe('IsNonNegative', () => {
  it('should return true for zero', () => {
    type Ex1 = IsNonNegative<0>
    type Ex2 = IsNonNegative<0n>

    type TestEx1 = Expect<IsEqual<Ex1, true>>
    type TestEx2 = Expect<IsEqual<Ex2, true>>
  })

  it('should return true for positive numbers and bigints', () => {
    type Ex1 = IsNonNegative<1>
    type Ex2 = IsNonNegative<1n>

    type TestEx1 = Expect<IsEqual<Ex1, true>>
    type TestEx2 = Expect<IsEqual<Ex2, true>>
  })

  it('should return false for negative numbers and bigints', () => {
    type Ex1 = IsNonNegative<-1>
    type Ex2 = IsNonNegative<-1n>

    type TestEx1 = Expect<IsEqual<Ex1, false>>
    type TestEx2 = Expect<IsEqual<Ex2, false>>
  })
})
