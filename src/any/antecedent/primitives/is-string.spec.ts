import { describe, expectTypeOf, it } from 'vitest'
import type { IsString } from '~/any/antecedent/primitives/is-string'

describe('IsString', () => {
  it('should return true if A extends string', () => {
    type Ex1 = IsString<'hello'>
    type Ex2 = IsString<string>

    expectTypeOf<Ex1>().toEqualTypeOf<true>()
    expectTypeOf<Ex2>().toEqualTypeOf<true>()
  })

  it('should return false if A does not extend string', () => {
    type Ex1 = IsString<1>
    type Ex2 = IsString<number>

    expectTypeOf<Ex1>().toEqualTypeOf<false>()
    expectTypeOf<Ex2>().toEqualTypeOf<false>()
  })

  it('should return boolean if A is a union that extends string', () => {
    type Ex1 = IsString<1 | 'hello'>
    type Ex2 = IsString<number | string>

    expectTypeOf<Ex1>().toEqualTypeOf<boolean>()
    expectTypeOf<Ex2>().toEqualTypeOf<boolean>()
  })
})
