import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/expect'
import type { IsTrue } from '~/logic/antecedent/is-true'

describe('IsTrue', () => {
  it('should evaluate `A`', () => {
    type Ex1 = IsTrue<true>
    type Ex2 = IsTrue<false>

    type TestEx1 = Expect<IsEqual<Ex1, true>>
    type TestEx2 = Expect<IsEqual<Ex2, false>>
  })
})
