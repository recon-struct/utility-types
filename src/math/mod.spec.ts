import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/expect'
import type { Mod } from './mod'

describe('mod', () => {
  it('should return the remainder of a division', () => {
    type Ex1 = Mod<10, 3>
    type Ex2 = Mod<10n, 3n>

    type TestEx1 = Expect<IsEqual<Ex1, 1>>
    type TestEx2 = Expect<IsEqual<Ex2, 1>>
  })
})
