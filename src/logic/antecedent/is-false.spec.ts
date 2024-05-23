import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'
import type { IsFalse } from '~/logic/antecedent/is-false'

describe('IsFalse', () => {
  it('should evaluate `¬A`', () => {
    type Ex1 = IsFalse<true>
    type Ex2 = IsFalse<false>

    type TestEx1 = Expect<IsEqual<Ex1, false>>
    type TestEx2 = Expect<IsEqual<Ex2, true>>
  })
})
