import { describe, expectTypeOf, it } from 'vitest'
import type { IsSnakeCase } from '~/string/antecedent/is-snake-case'

describe('IsSnakeCase', () => {
  it('should be true if `A` is snake_case', () => {
    type Ex1 = IsSnakeCase<'hello'>
    type Ex2 = IsSnakeCase<'hello_world'>
    type Ex3 = IsSnakeCase<'hello_123'>
    type Ex4 = IsSnakeCase<'hello_world_123'>

    expectTypeOf<Ex1>().toEqualTypeOf<true>()
    expectTypeOf<Ex2>().toEqualTypeOf<true>()
    expectTypeOf<Ex3>().toEqualTypeOf<true>()
    expectTypeOf<Ex4>().toEqualTypeOf<true>()
  })

  it('should be false if `A` is not snake_case', () => {
    type Ex1 = IsSnakeCase<'_hello'>
    type Ex2 = IsSnakeCase<'hello_'>
    type Ex3 = IsSnakeCase<'_HELlo_world'>
    type Ex4 = IsSnakeCase<'_hello_'>

    expectTypeOf<Ex1>().toEqualTypeOf<false>()
    expectTypeOf<Ex2>().toEqualTypeOf<false>()
    expectTypeOf<Ex3>().toEqualTypeOf<false>()
    expectTypeOf<Ex4>().toEqualTypeOf<false>()
  })
})
