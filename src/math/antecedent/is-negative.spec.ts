import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/expect'
import type { IsNegative } from './is-negative'

describe('IsNegative', () => {
  it('should return true for negative numbers and bigints', () => {
    type Ex1 = IsNegative<-1>
    type Ex2 = IsNegative<-1n>

    type TestEx1 = Expect<IsEqual<Ex1, true>>
    type TestEx2 = Expect<IsEqual<Ex2, true>>
  })

  it('should return false for positive numbers and bigints', () => {
    type Ex1 = IsNegative<1>
    type Ex2 = IsNegative<1n>

    type TestEx1 = Expect<IsEqual<Ex1, false>>
    type TestEx2 = Expect<IsEqual<Ex2, false>>
  })

  it('should return false for zero', () => {
    type Ex1 = IsNegative<0>
    type Ex2 = IsNegative<0n>

    type TestEx1 = Expect<IsEqual<Ex1, false>>
    type TestEx2 = Expect<IsEqual<Ex2, false>>
  })
})
