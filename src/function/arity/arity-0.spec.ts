import { describe, expectTypeOf, it } from 'vitest'
import type { Arity0 } from '~/function/arity/arity-0'

describe('Arity0', () => {
  it('should be a function with 0 parameters', () => {
    expectTypeOf<Arity0>().toEqualTypeOf<() => any>()
  })

  it('should return a value of type A', () => {
    type A = 'A'
    type Ex = Arity0<A>

    expectTypeOf<Ex>().toEqualTypeOf<() => A>()
  })
})
