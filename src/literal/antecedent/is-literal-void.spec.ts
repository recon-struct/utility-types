import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/expect'
import type { IsLiteralVoid } from '~/literal/antecedent/is-literal-void'

describe('IsLiteralVoid', () => {
  it('should evaluate if `A` is a literal void', () => {
    type Ex1 = IsLiteralVoid<void>

    type TestEx1 = Expect<IsEqual<Ex1, true>>
  })

  it('should evaluate if `A` is not a literal void', () => {
    type Ex1 = IsLiteralVoid<boolean>
    type Ex2 = IsLiteralVoid<null>
    type Ex3 = IsLiteralVoid<{}>
    type Ex4 = IsLiteralVoid<undefined>
    type Ex5 = IsLiteralVoid<never>
    type Ex6 = IsLiteralVoid<unknown>
    type Ex7 = IsLiteralVoid<any>

    type TestEx1 = Expect<IsEqual<Ex1, false>>
    type TestEx2 = Expect<IsEqual<Ex2, false>>
    type TestEx3 = Expect<IsEqual<Ex3, false>>
    type TestEx4 = Expect<IsEqual<Ex4, false>>
    type TestEx5 = Expect<IsEqual<Ex5, false>>
    type TestEx6 = Expect<IsEqual<Ex6, false>>
    type TestEx7 = Expect<IsEqual<Ex7, false>>
  })
})
