import { describe, it } from 'bun:test'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'
import type { IsLiteralNull } from '~/literal/antecedent/is-literal-null'

describe('IsLiteralNull', () => {
  it('should evaluate if `A` is a literal null', () => {
    type Ex1 = IsLiteralNull<null>

    type TestEx1 = Expect<IsEqual<Ex1, true>>
  })

  it('should evaluate if `A` is not a literal null', () => {
    type Ex1 = IsLiteralNull<boolean>
    type Ex2 = IsLiteralNull<true>
    type Ex3 = IsLiteralNull<{}>
    type Ex4 = IsLiteralNull<undefined>
    type Ex5 = IsLiteralNull<0>
    type Ex6 = IsLiteralNull<''>

    type TestEx1 = Expect<IsEqual<Ex1, false>>
    type TestEx2 = Expect<IsEqual<Ex2, false>>
    type TestEx3 = Expect<IsEqual<Ex3, false>>
    type TestEx4 = Expect<IsEqual<Ex4, false>>
    type TestEx5 = Expect<IsEqual<Ex5, false>>
    type TestEx6 = Expect<IsEqual<Ex6, false>>
  })
})
