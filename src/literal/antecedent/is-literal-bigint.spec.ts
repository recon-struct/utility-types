import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'
import type { IsLiteralBigInt } from '~/literal/antecedent/is-literal-bigint'

describe('IsLiteralBigInt', () => {
  it('should evaluate if `A` is a literal bigint', () => {
    type Ex1 = IsLiteralBigInt<1n>
    type Ex2 = IsLiteralBigInt<0n>
    type Ex3 = IsLiteralBigInt<-1n>

    type TestEx1 = Expect<IsEqual<Ex1, true>>
    type TestEx2 = Expect<IsEqual<Ex2, true>>
    type TestEx3 = Expect<IsEqual<Ex3, true>>
  })

  it('should evaluate if `A` is not a literal bigint', () => {
    type Ex1 = IsLiteralBigInt<bigint>
    type Ex2 = IsLiteralBigInt<number>
    type Ex3 = IsLiteralBigInt<null>
    type Ex4 = IsLiteralBigInt<1>
    type Ex5 = IsLiteralBigInt<true>
    type Ex6 = IsLiteralBigInt<false>

    type TestEx1 = Expect<IsEqual<Ex1, false>>
    type TestEx2 = Expect<IsEqual<Ex2, false>>
    type TestEx3 = Expect<IsEqual<Ex3, false>>
    type TestEx4 = Expect<IsEqual<Ex4, false>>
    type TestEx5 = Expect<IsEqual<Ex5, false>>
    type TestEx6 = Expect<IsEqual<Ex6, false>>
  })
})
