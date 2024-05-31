import type { IsNull } from '~/any/antecedent/primitives/is-null'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/expect'

describe('IsNull', () => {
  it('should return true if A extends null', () => {
    type Ex1 = IsNull<null>

    type TestEx1 = Expect<IsEqual<Ex1, true>>
  })

  it('should return false if A does not extend null', () => {
    type Ex1 = IsNull<undefined>
    type Ex2 = IsNull<void>

    type TestEx1 = Expect<IsEqual<Ex1, false>>
    type TestEx2 = Expect<IsEqual<Ex2, false>>
  })

  it('should return boolean if A is a union that extends null', () => {
    type Ex1 = IsNull<null | undefined>
    type Ex2 = IsNull<void | null>

    type TestEx1 = Expect<IsEqual<Ex1, boolean>>
    type TestEx2 = Expect<IsEqual<Ex2, boolean>>
  })
})
