import { describe, it } from 'bun:test'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'
import type { StringLength } from '~/string/string-length'

describe('StringLength', () => {
  it('should get the length of a string', () => {
    type Ex1 = StringLength<'hello'>
    type Ex2 = StringLength<'hello world'>
    type Ex3 = StringLength<'hello 123'>
    type Ex4 = StringLength<'hello world 123'>

    type TestEx1 = Expect<IsEqual<Ex1, 5>>
    type TestEx2 = Expect<IsEqual<Ex2, 11>>
    type TestEx3 = Expect<IsEqual<Ex3, 9>>
    type TestEx4 = Expect<IsEqual<Ex4, 15>>
  })
})
