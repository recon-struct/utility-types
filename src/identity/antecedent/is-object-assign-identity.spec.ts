import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/expect'
import type { IsObjectAssignIdentity } from '~/identity/antecedent/is-object-assign-identity'

describe('IsObjectAssignIdentity', () => {
  it('should evaluate if the item is an empty object', () => {
    type Ex1 = IsObjectAssignIdentity<{}>

    type TestEx1 = Expect<IsEqual<Ex1, true>>
  })

  it('should not match if the item is not an empty object', () => {
    type Ex1 = IsObjectAssignIdentity<any>
    type Ex2 = IsObjectAssignIdentity<{ a: any }>

    type TestEx1 = Expect<IsEqual<Ex1, false>>
    type TestEx2 = Expect<IsEqual<Ex2, false>>
  })
})
