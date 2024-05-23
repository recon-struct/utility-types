import { describe, it } from 'bun:test'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'
import type { IsKebabCase } from '~/string/antecedent/is-kebab-case'

describe('IsKebabCase', () => {
  it('should be true if `A` is kebab-case', () => {
    type Ex1 = IsKebabCase<'hello'>
    type Ex2 = IsKebabCase<'hello-world'>
    type Ex3 = IsKebabCase<'hello123'>
    type Ex4 = IsKebabCase<'hello-world-123'>

    type TestEx1 = Expect<IsEqual<Ex1, true>>
    type TestEx2 = Expect<IsEqual<Ex2, true>>
    type TestEx3 = Expect<IsEqual<Ex3, true>>
    type TestEx4 = Expect<IsEqual<Ex4, true>>
  })

  it('should be false if `A` is not kebab-case', () => {
    type Ex1 = IsKebabCase<'Hello-'>
    type Ex2 = IsKebabCase<'-123-Hello'>
    type Ex3 = IsKebabCase<'helloWorld123_456'>
    type Ex4 = IsKebabCase<'helloWorld123_456'>

    type TestEx1 = Expect<IsEqual<Ex1, false>>
    type TestEx2 = Expect<IsEqual<Ex2, false>>
    type TestEx3 = Expect<IsEqual<Ex3, false>>
    type TestEx4 = Expect<IsEqual<Ex4, false>>
  })
})
