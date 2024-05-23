import { describe, it } from 'bun:test'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'
import type { IsCamelCase } from '~/string/antecedent/is-camel-case'

describe('IsCamelCase', () => {
  it('should be true if `A` is camelCase', () => {
    type Ex1 = IsCamelCase<'hello'>
    type Ex2 = IsCamelCase<'helloWorld'>
    type Ex3 = IsCamelCase<'hello123'>
    type Ex4 = IsCamelCase<'helloWorld123'>

    type TestEx1 = Expect<IsEqual<Ex1, true>>
    type TestEx2 = Expect<IsEqual<Ex2, true>>
    type TestEx3 = Expect<IsEqual<Ex3, true>>
    type TestEx4 = Expect<IsEqual<Ex4, true>>
  })

  it('should be false if `A` is not camelCase', () => {
    type Ex1 = IsCamelCase<'Hello'>
    type Ex2 = IsCamelCase<'123Hello'>
    type Ex3 = IsCamelCase<'helloWorld123_456'>
    type Ex4 = IsCamelCase<'helloWorld123_456'>

    type TestEx1 = Expect<IsEqual<Ex1, false>>
    type TestEx2 = Expect<IsEqual<Ex2, false>>
    type TestEx3 = Expect<IsEqual<Ex3, false>>
    type TestEx4 = Expect<IsEqual<Ex4, false>>
  })
})
