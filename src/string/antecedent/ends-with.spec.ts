import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'
import type { EndsWith } from '~/string/antecedent/ends-with'

describe('EndsWith', () => {
  it('should return true if `A` ends with `B`', () => {
    type Ex = EndsWith<'abc', 'c'>

    type TestEx = Expect<IsEqual<Ex, true>>
  })

  it('should return false if `A` does not end with `B`', () => {
    type Ex = EndsWith<'abc', 'a'>

    type TestEx = Expect<IsEqual<Ex, false>>
  })
})
