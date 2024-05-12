import { describe, expectTypeOf, it } from 'vitest'
import type { Arity1 } from '~/function/arity/arity-1'

describe('Arity1', () => {
  it('should be a function with 1 parameter', () => {
    expectTypeOf<Arity1>().toEqualTypeOf<(a: any) => any>()
  })

  it('should return a value of type B', () => {
    type A = 'A'
    type B = 'B'
    type Ex = Arity1<A, B>

    expectTypeOf<Ex>().toEqualTypeOf<(a: A) => B>()
  })
})
