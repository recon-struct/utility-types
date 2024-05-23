import { describe, it } from 'bun:test'
import type { IsNever } from '~/any/antecedent/is-never'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'

describe('IsNever', () => {
  it('should return true if A extends never', () => {
    type Ex1 = IsNever<never>

    type TestEx1 = Expect<IsEqual<Ex1, true>>
  })

  it('should return false if A does not extend never', () => {
    type Ex1 = IsNever<null>
    type Ex2 = IsNever<void>

    type TestEx1 = Expect<IsEqual<Ex1, false>>
    type TestEx2 = Expect<IsEqual<Ex2, false>>
  })

  it('should return false if A is a union that extends never', () => {
    type Ex1 = IsNever<never | null>
    type Ex2 = IsNever<void | never>

    type TestEx1 = Expect<IsEqual<Ex1, false>>
    type TestEx2 = Expect<IsEqual<Ex2, false>>
  })
})
