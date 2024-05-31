import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/expect'
import type { LowerCase } from '~/string/lower-case'

describe('LowerCase', () => {
  it('should convert a string to lower case', () => {
    type Ex1 = LowerCase<'Hello'>
    type Ex2 = LowerCase<'Hello World'>
    type Ex3 = LowerCase<'Hello 123'>
    type Ex4 = LowerCase<'Hello World 123'>

    type TestEx1 = Expect<IsEqual<Ex1, 'hello'>>
    type TestEx2 = Expect<IsEqual<Ex2, 'hello world'>>
    type TestEx3 = Expect<IsEqual<Ex3, 'hello 123'>>
    type TestEx4 = Expect<IsEqual<Ex4, 'hello world 123'>>
  })
})
