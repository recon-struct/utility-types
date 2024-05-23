import { describe, it } from 'bun:test'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'
import type { Not } from '~/logic/antecedent/not'

describe('Not', () => {
  it('should evaluate `¬A`', () => {
    type Ex1 = Not<true>
    type Ex2 = Not<false>

    type TestEx1 = Expect<IsEqual<Ex1, false>>
    type TestEx2 = Expect<IsEqual<Ex2, true>>
  })
})
