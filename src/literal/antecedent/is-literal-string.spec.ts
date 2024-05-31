import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/expect'
import type { IsLiteralString } from '~/literal/antecedent/is-literal-string'

describe('IsLiteralString', () => {
  it('should evaluate if `A` is a literal string', () => {
    type Ex1 = IsLiteralString<'hello'>
    type Ex2 = IsLiteralString<'world'>

    type TestEx1 = Expect<IsEqual<Ex1, true>>
    type TestEx2 = Expect<IsEqual<Ex2, true>>
  })

  it('should evaluate if `A` is not a literal string', () => {
    type Ex1 = IsLiteralString<string>
    type Ex2 = IsLiteralString<null>
    type Ex3 = IsLiteralString<{}>

    type TestEx1 = Expect<IsEqual<Ex1, false>>
    type TestEx2 = Expect<IsEqual<Ex2, false>>
    type TestEx3 = Expect<IsEqual<Ex3, false>>
  })
})
