import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'
import type { Override } from '~/object/override'

describe('Override', () => {
  it('returns the intersection of `A` and `B` for any conflicts defer to `B`', () => {
    type Ex = Override<{ a: number; b: number }, { a: string }>['a']

    type TestEx = Expect<IsEqual<Ex, string>>
  })
})
