import { describe, expectTypeOf, it } from 'vitest'
import type { IsValueOf } from '~/object/antecedent/is-value-of'

describe('IsValueOf', () => {
  it('should return true if B extends ValueOf<A>', () => {
    type Ex1 = IsValueOf<{ a: 1 }, 1>
    type Ex2 = IsValueOf<[1, 2, 3], 2>

    expectTypeOf<Ex1>().toEqualTypeOf<true>()
    expectTypeOf<Ex2>().toEqualTypeOf<true>()
  })

  it('should return false if B does not extend ValueOf<A>', () => {
    type Ex = IsValueOf<{ a: 1 }, 2>

    expectTypeOf<Ex>().toEqualTypeOf<false>()
  })
})
