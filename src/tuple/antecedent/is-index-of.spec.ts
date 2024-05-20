import type { IsIndexOf } from '~/tuple/antecedent/is-index-of'
import { describe, expectTypeOf, it } from 'vitest'

describe('IsIndexOf', () => {
  it('should be true if B extends IndexOf<A>', () => {
    type Ex1 = IsIndexOf<[1, 2, 3], 2> // true
    expectTypeOf<Ex1>().toEqualTypeOf<true>()
  })

  it('should be false if B does not extend IndexOf<A>', () => {
    type Ex2 = IsIndexOf<[], 1> // false
    expectTypeOf<Ex2>().toEqualTypeOf<false>()
  })
})