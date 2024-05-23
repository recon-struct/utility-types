import { describe, it } from 'bun:test'
import type { IsBoolean } from '~/any/antecedent/primitives/is-boolean'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'

describe('IsBoolean', () => {
  it('should return true if A extends boolean', () => {
    type Ex1 = IsBoolean<true | false>
    type Ex2 = IsBoolean<boolean>

    type TestEx1 = Expect<IsEqual<Ex1, true>>
    type TestEx2 = Expect<IsEqual<Ex2, true>>
  })

  it('should return false if A does not extend boolean', () => {
    type Ex1 = IsBoolean<1>
    type Ex2 = IsBoolean<number>

    type TestEx1 = Expect<IsEqual<Ex1, false>>
    type TestEx2 = Expect<IsEqual<Ex2, false>>
  })

  it('should return boolean if A is a union that extends boolean', () => {
    type Ex1 = IsBoolean<1 | true>
    type Ex2 = IsBoolean<number | false>

    type TestEx1 = Expect<IsEqual<Ex1, boolean>>
    type TestEx2 = Expect<IsEqual<Ex2, boolean>>
  })
})
