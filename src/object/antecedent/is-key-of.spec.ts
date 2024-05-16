import { describe, expectTypeOf, it } from 'vitest'
import type { IsKeyOf } from '~/object/antecedent/is-key-of'

describe('IsKeyOf', () => {
  it('should return true if B extends KeyOf<A>', () => {
    type A = { hello: 'World' }
    type Ex = IsKeyOf<A, 'hello'>

    expectTypeOf<Ex>().toEqualTypeOf<true>()
  })

  it('should return false if B does not extend KeyOf<A>', () => {
    type A = { hello: 'World' }
    type Ex = IsKeyOf<A, 42>

    expectTypeOf<Ex>().toEqualTypeOf<false>()
  })
})
