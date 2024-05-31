import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/expect'
import type { IsArrayConcatIdentity } from '~/identity/antecedent/is-array-concat-identity'

describe('IsArrayConcatIdentity', () => {
  it('should evaluate if the item is an empty array', () => {
    type Ex1 = IsArrayConcatIdentity<[]>

    type TestEx1 = Expect<IsEqual<Ex1, true>>
  })

  it('should not match if the item is not an empty array', () => {
    type Ex1 = IsArrayConcatIdentity<any[]>
    type Ex2 = IsArrayConcatIdentity<[any]>

    type TestEx1 = Expect<IsEqual<Ex1, false>>
    type TestEx2 = Expect<IsEqual<Ex2, false>>
  })
})
