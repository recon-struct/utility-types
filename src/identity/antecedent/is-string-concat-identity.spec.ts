import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'
import type { IsStringConcatIdentity } from '~/identity/antecedent/is-string-concat-identity'

describe('IsStringConcatIdentity', () => {
  it('should evaluate if the item is an empty string', () => {
    type Ex1 = IsStringConcatIdentity<''>

    type TestEx1 = Expect<IsEqual<Ex1, true>>
  })

  it('should not match if the item is not an empty string', () => {
    type Ex1 = IsStringConcatIdentity<any>
    type Ex2 = IsStringConcatIdentity<'a'>

    type TestEx1 = Expect<IsEqual<Ex1, false>>
    type TestEx2 = Expect<IsEqual<Ex2, false>>
  })
})
