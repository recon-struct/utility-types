import { describe, expectTypeOf, it } from 'vitest'
import type { Arity5 } from '~/function/arity/arity-5'

describe('Arity5', () => {
  it('should be a function with 5 parameters', () => {
    expectTypeOf<Arity5>().toEqualTypeOf<
      (a: any, b: any, c: any, d: any, e: any) => any
    >()
  })

  it('should return a value of type F', () => {
    type A = 'A'
    type B = 'B'
    type C = 'C'
    type D = 'D'
    type E = 'E'
    type F = 'F'
    type Ex = Arity5<A, B, C, D, E, F>

    expectTypeOf<Ex>().toEqualTypeOf<(a: A, b: B, c: C, d: D, e: E) => F>()
  })
})
