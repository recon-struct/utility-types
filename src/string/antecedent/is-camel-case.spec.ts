import { describe, expectTypeOf, it } from 'vitest'
import type { IsCamelCase } from '~/string/antecedent/is-camel-case'

describe('IsCamelCase', () => {
  it('should be true if `A` is camelCase', () => {
    type Ex1 = IsCamelCase<'hello'>
    type Ex2 = IsCamelCase<'helloWorld'>
    type Ex3 = IsCamelCase<'hello123'>
    type Ex4 = IsCamelCase<'helloWorld123'>

    expectTypeOf<Ex1>().toEqualTypeOf<true>()
    expectTypeOf<Ex2>().toEqualTypeOf<true>()
    expectTypeOf<Ex3>().toEqualTypeOf<true>()
    expectTypeOf<Ex4>().toEqualTypeOf<true>()
  })

  it('should be false if `A` is not camelCase', () => {
    type Ex1 = IsCamelCase<'Hello'>
    type Ex2 = IsCamelCase<'123Hello'>
    type Ex3 = IsCamelCase<'helloWorld123_456'>
    type Ex4 = IsCamelCase<'helloWorld123_456'>

    expectTypeOf<Ex1>().toEqualTypeOf<false>()
    expectTypeOf<Ex2>().toEqualTypeOf<false>()
    expectTypeOf<Ex3>().toEqualTypeOf<false>()
    expectTypeOf<Ex4>().toEqualTypeOf<false>()
  })
})
