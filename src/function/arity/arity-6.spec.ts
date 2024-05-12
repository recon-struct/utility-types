import { describe, expectTypeOf, it } from 'vitest'
import type { Arity6 } from '~/function/arity/arity-6'

describe('Arity6', () => {
  it('should be a function with 6 parameters', () => {
    expectTypeOf<Arity6>().toEqualTypeOf<
      (a: any, b: any, c: any, d: any, e: any, f: any) => any
    >()
  })

  it('should return a value of type G', () => {
    type A = 'A'
    type B = 'B'
    type C = 'C'
    type D = 'D'
    type E = 'E'
    type F = 'F'
    type G = 'G'
    type Ex = Arity6<A, B, C, D, E, F, G>

    expectTypeOf<Ex>().toEqualTypeOf<
      (a: A, b: B, c: C, d: D, e: E, f: F) => G
    >()
  })
})
