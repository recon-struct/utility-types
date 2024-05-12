import { describe, expectTypeOf, it } from 'vitest'
import type { Arity7 } from '~/function/arity/arity-7'

describe('Arity7', () => {
  it('should be a function with 7 parameters', () => {
    expectTypeOf<Arity7>().toEqualTypeOf<
      (a: any, b: any, c: any, d: any, e: any, f: any, g: any) => any
    >()
  })

  it('should return a value of type H', () => {
    type A = 'A'
    type B = 'B'
    type C = 'C'
    type D = 'D'
    type E = 'E'
    type F = 'F'
    type G = 'G'
    type H = 'H'
    type Ex = Arity7<A, B, C, D, E, F, G, H>

    expectTypeOf<Ex>().toEqualTypeOf<
      (a: A, b: B, c: C, d: D, e: E, f: F, g: G) => H
    >()
  })
})
