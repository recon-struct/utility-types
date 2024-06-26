import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/expect'
import type { NumMultIdentity } from '~/identity/num-mult-identity'

describe('NumMultIdentity', () => {
  it('should equal 1', () => {
    type TestNumMultIdentity = Expect<IsEqual<NumMultIdentity, 1>>
  })
})
