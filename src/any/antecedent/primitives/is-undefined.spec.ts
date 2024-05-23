import { describe, it } from 'bun:test'
import type { IsUndefined } from '~/any/antecedent/primitives/is-undefined'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'

describe('IsUndefined', () => {
  it('should return true if A extends undefined', () => {
    type Ex1 = IsUndefined<undefined>

    type TestEx1 = Expect<IsEqual<Ex1, true>>
  })

  it('should return false if A does not extend undefined', () => {
    type Ex1 = IsUndefined<null>
    type Ex2 = IsUndefined<void>

    type TestEx1 = Expect<IsEqual<Ex1, false>>
    type TestEx2 = Expect<IsEqual<Ex2, false>>
  })

  it('should return boolean if A is a union that extends undefined', () => {
    type Ex1 = IsUndefined<undefined | null>
    type Ex2 = IsUndefined<void | undefined>

    type TestEx1 = Expect<IsEqual<Ex1, boolean>>
    type TestEx2 = Expect<IsEqual<Ex2, boolean>>
  })
})
