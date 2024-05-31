import type { IsNumber } from '~/any/antecedent/primitives/is-number'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/expect'

describe('IsNumber', () => {
  it('should return true if A extends number', () => {
    type Ex1 = IsNumber<1>
    type Ex2 = IsNumber<number>

    type TestEx1 = Expect<IsEqual<Ex1, true>>
    type TestEx2 = Expect<IsEqual<Ex2, true>>
  })

  it('should return false if A does not extend number', () => {
    type Ex1 = IsNumber<1n>
    type Ex2 = IsNumber<bigint>

    type TestEx1 = Expect<IsEqual<Ex1, false>>
    type TestEx2 = Expect<IsEqual<Ex2, false>>
  })

  it('should return boolean if A is a union that extends number', () => {
    type Ex1 = IsNumber<1 | 1n>
    type Ex2 = IsNumber<number | bigint>

    type TestEx1 = Expect<IsEqual<Ex1, boolean>>
    type TestEx2 = Expect<IsEqual<Ex2, boolean>>
  })
})
