import type { IsNullish } from '~/any/antecedent/is-nullish'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/expect'

describe('IsNullish', () => {
  it('should return true if A extends null | undefined', () => {
    type Ex1 = IsNullish<null>
    type Ex2 = IsNullish<undefined>

    type TestEx1 = Expect<IsEqual<Ex1, true>>
    type TestEx2 = Expect<IsEqual<Ex2, true>>
  })

  it('should return false if A does not extend null | undefined', () => {
    type Ex1 = IsNullish<0>
    type Ex2 = IsNullish<void>

    type TestEx1 = Expect<IsEqual<Ex1, false>>
    type TestEx2 = Expect<IsEqual<Ex2, false>>
  })

  it('should return boolean if A is a union that extends null | undefined', () => {
    type Ex1 = IsNullish<null | true>
    type Ex2 = IsNullish<1 | null>

    type TestEx1 = Expect<IsEqual<Ex1, boolean>>
    type TestEx2 = Expect<IsEqual<Ex2, boolean>>
  })
})
