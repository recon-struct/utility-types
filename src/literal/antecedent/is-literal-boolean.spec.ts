import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/expect'
import type { IsLiteralBoolean } from '~/literal/antecedent/is-literal-boolean'

describe('IsLiteralBoolean', () => {
  it('should evaluate if `A` is a literal boolean', () => {
    type Ex1 = IsLiteralBoolean<true>
    type Ex2 = IsLiteralBoolean<false>

    type TestEx1 = Expect<IsEqual<Ex1, true>>
    type TestEx2 = Expect<IsEqual<Ex2, true>>
  })

  it('should evaluate if `A` is not a literal boolean', () => {
    type Ex1 = IsLiteralBoolean<boolean>
    type Ex2 = IsLiteralBoolean<null>
    type Ex3 = IsLiteralBoolean<{}>

    type TestEx1 = Expect<IsEqual<Ex1, false>>
    type TestEx2 = Expect<IsEqual<Ex2, false>>
    type TestEx3 = Expect<IsEqual<Ex3, false>>
  })
})
