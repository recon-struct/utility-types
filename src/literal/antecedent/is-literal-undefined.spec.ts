import { describe, it } from 'bun:test'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'
import type { IsLiteralUndefined } from '~/literal/antecedent/is-literal-undefined'

describe('IsLiteralUndefined', () => {
  it('should evaluate if `A` is a literal undefined', () => {
    type Ex1 = IsLiteralUndefined<undefined>

    type TestEx1 = Expect<IsEqual<Ex1, true>>
  })

  it('should evaluate if `A` is not a literal undefined', () => {
    type Ex1 = IsLiteralUndefined<boolean>
    type Ex2 = IsLiteralUndefined<true>
    type Ex3 = IsLiteralUndefined<{}>
    type Ex4 = IsLiteralUndefined<null>
    type Ex5 = IsLiteralUndefined<0>
    type Ex6 = IsLiteralUndefined<''>

    type TestEx1 = Expect<IsEqual<Ex1, false>>
    type TestEx2 = Expect<IsEqual<Ex2, false>>
    type TestEx3 = Expect<IsEqual<Ex3, false>>
    type TestEx4 = Expect<IsEqual<Ex4, false>>
    type TestEx5 = Expect<IsEqual<Ex5, false>>
    type TestEx6 = Expect<IsEqual<Ex6, false>>
  })
})
