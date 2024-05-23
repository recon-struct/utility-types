import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'
import type { UpperCase } from '~/string/upper-case'

describe('UpperCase', () => {
  it('should convert a string to upper case', () => {
    type Ex1 = UpperCase<'hello'>
    type Ex2 = UpperCase<'hello world'>
    type Ex3 = UpperCase<'hello 123'>
    type Ex4 = UpperCase<'hello world 123'>

    type TestEx1 = Expect<IsEqual<Ex1, 'HELLO'>>
    type TestEx2 = Expect<IsEqual<Ex2, 'HELLO WORLD'>>
    type TestEx3 = Expect<IsEqual<Ex3, 'HELLO 123'>>
    type TestEx4 = Expect<IsEqual<Ex4, 'HELLO WORLD 123'>>
  })
})
