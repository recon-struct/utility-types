import type { IsTuple } from '~/tuple/antecedent/is-tuple'
import { describe, expectTypeOf, it } from 'vitest'

describe('IsTuple', () => {
  it('should be true if A is a tuple', () => {
    type Ex1 = IsTuple<[any, any]> // true
    expectTypeOf<Ex1>().toEqualTypeOf<true>()
  })

  it('should be false if A is not a tuple', () => {
    type Ex2 = IsTuple<any[]> // false
    expectTypeOf<Ex2>().toEqualTypeOf<false>()
  })
})