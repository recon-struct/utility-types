import { describe, it } from 'bun:test'
import type { IsBigInt } from '~/any/antecedent/primitives/is-bigint'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'

describe('IsBigInt', () => {
  it('should return true if A extends bigint', () => {
    type Ex1 = IsBigInt<1n>
    type Ex2 = IsBigInt<bigint>

    type TestEx1 = Expect<IsEqual<Ex1, true>>
    type TestEx2 = Expect<IsEqual<Ex2, true>>
  })

  it('should return false if A does not extend bigint', () => {
    type Ex1 = IsBigInt<1>
    type Ex2 = IsBigInt<number>

    type TestEx1 = Expect<IsEqual<Ex1, false>>
    type TestEx2 = Expect<IsEqual<Ex2, false>>
  })

  it('should return boolean if A is a union that extends bigint', () => {
    type Ex1 = IsBigInt<1 | 1n>
    type Ex2 = IsBigInt<number | bigint>

    type TestEx1 = Expect<IsEqual<Ex1, boolean>>
    type TestEx2 = Expect<IsEqual<Ex2, boolean>>
  })
})
