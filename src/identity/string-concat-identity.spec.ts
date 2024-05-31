import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/expect'
import type { StringConcatIdentity } from '~/identity/string-concat-identity'

describe('StringConcatIdentity', () => {
  it('should equal ""', () => {
    type TestStringConcatIdentity = Expect<IsEqual<StringConcatIdentity, ''>>
  })
})
