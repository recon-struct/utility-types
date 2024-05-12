import { describe, expectTypeOf, it } from 'vitest'
import type { IsConstructor } from '~/function/antecedent/is-constructor'

describe('IsConstructor', () => {
  it('hould return true if the function is a constructor', () => {
    type Ex2 = IsConstructor<new () => void>

    expectTypeOf<Ex2>().toEqualTypeOf<true>()
  })

  it('should return false if the function is not a constructor', () => {
    type Ex1 = IsConstructor<() => void>
    type Ex2 = IsConstructor<Function>

    expectTypeOf<Ex1>().toEqualTypeOf<false>()
    expectTypeOf<Ex2>().toEqualTypeOf<false>()
  })
})
