import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'
import type { ObjectAssignIdentity } from '~/identity/object-assign-identity'

describe('ObjectAssignIdentity', () => {
  it('should equal {}', () => {
    type TestEx = Expect<IsEqual<ObjectAssignIdentity, {}>>
  })
})
