import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/expect'
import type { IsLiteralKey } from '~/literal/antecedent/is-literal-key'

describe('IsLiteralKey', () => {
  it('should evaluate if `A` is a literal key', () => {
    const MY_SYMBOL = Symbol('my-symbol')
    type Ex1 = IsLiteralKey<'a'>
    type Ex2 = IsLiteralKey<42>
    type Ex3 = IsLiteralKey<typeof MY_SYMBOL>

    type TestEx1 = Expect<IsEqual<Ex1, true>>
    type TestEx2 = Expect<IsEqual<Ex2, true>>
    type TestEx3 = Expect<IsEqual<Ex3, true>>
  })

  it('should evaluate if `A` is not a literal key', () => {
    type Ex1 = IsLiteralKey<string>
    type Ex2 = IsLiteralKey<null>
    type Ex3 = IsLiteralKey<{}>
    type Ex4 = IsLiteralKey<true>
    type Ex5 = IsLiteralKey<false>

    type TestEx1 = Expect<IsEqual<Ex1, false>>
    type TestEx2 = Expect<IsEqual<Ex2, false>>
    type TestEx3 = Expect<IsEqual<Ex3, false>>
    type TestEx4 = Expect<IsEqual<Ex4, false>>
    type TestEx5 = Expect<IsEqual<Ex5, false>>
  })
})
