import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/expect'
import type { IsLiteralNumber } from '~/literal/antecedent/is-literal-number'

describe('IsLiteralNumber', () => {
  it('should evaluate if `A` is a literal number', () => {
    type Ex1 = IsLiteralNumber<1>
    type Ex2 = IsLiteralNumber<0>
    type Ex3 = IsLiteralNumber<-1>
    type Ex4 = IsLiteralNumber<1n>
    type Ex5 = IsLiteralNumber<0n>
    type Ex6 = IsLiteralNumber<-1n>

    type TestEx1 = Expect<IsEqual<Ex1, true>>
    type TestEx2 = Expect<IsEqual<Ex2, true>>
    type TestEx3 = Expect<IsEqual<Ex3, true>>
    type TestEx4 = Expect<IsEqual<Ex4, false>>
    type TestEx5 = Expect<IsEqual<Ex5, false>>
    type TestEx6 = Expect<IsEqual<Ex6, false>>
  })

  it('should evaluate if `A` is not a literal number', () => {
    type Ex1 = IsLiteralNumber<number>
    type Ex2 = IsLiteralNumber<bigint>
    type Ex3 = IsLiteralNumber<null>
    type Ex4 = IsLiteralNumber<{}>
    type Ex5 = IsLiteralNumber<true>
    type Ex6 = IsLiteralNumber<false>
    type Ex7 = IsLiteralNumber<boolean>

    type TestEx1 = Expect<IsEqual<Ex1, false>>
    type TestEx2 = Expect<IsEqual<Ex2, false>>
    type TestEx3 = Expect<IsEqual<Ex3, false>>
    type TestEx4 = Expect<IsEqual<Ex4, false>>
    type TestEx5 = Expect<IsEqual<Ex5, false>>
    type TestEx6 = Expect<IsEqual<Ex6, false>>
    type TestEx7 = Expect<IsEqual<Ex7, false>>
  })
})
