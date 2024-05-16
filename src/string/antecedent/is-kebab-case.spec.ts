import { describe, expectTypeOf, it } from 'vitest'
import type { IsKebabCase } from '~/string/antecedent/is-kebab-case'

describe('IsKebabCase', () => {
  it('should be true if `A` is kebab-case', () => {
    type Ex1 = IsKebabCase<'hello'>
    type Ex2 = IsKebabCase<'hello-world'>
    type Ex3 = IsKebabCase<'hello123'>
    type Ex4 = IsKebabCase<'hello-world-123'>

    expectTypeOf<Ex1>().toEqualTypeOf<true>()
    expectTypeOf<Ex2>().toEqualTypeOf<true>()
    expectTypeOf<Ex3>().toEqualTypeOf<true>()
    expectTypeOf<Ex4>().toEqualTypeOf<true>()
  })

  it('should be false if `A` is not kebab-case', () => {
    type Ex1 = IsKebabCase<'Hello-'>
    type Ex2 = IsKebabCase<'-123-Hello'>
    type Ex3 = IsKebabCase<'helloWorld123_456'>
    type Ex4 = IsKebabCase<'helloWorld123_456'>

    expectTypeOf<Ex1>().toEqualTypeOf<false>()
    expectTypeOf<Ex2>().toEqualTypeOf<false>()
    expectTypeOf<Ex3>().toEqualTypeOf<false>()
    expectTypeOf<Ex4>().toEqualTypeOf<false>()
  })
})
