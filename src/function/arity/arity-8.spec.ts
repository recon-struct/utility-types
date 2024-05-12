import { describe, expectTypeOf, it } from 'vitest'
import type { Arity8 } from '~/function/arity/arity-8'

describe('Arity8', () => {
  it('should be a function with 8 parameters', () => {
    expectTypeOf<Arity8>().toEqualTypeOf<
      (a: any, b: any, c: any, d: any, e: any, f: any, g: any, h: any) => any
    >()
  })

  it('should return a value of type I', () => {
    type A = 'A'
    type B = 'B'
    type C = 'C'
    type D = 'D'
    type E = 'E'
    type F = 'F'
    type G = 'G'
    type H = 'H'
    type I = 'I'
    type Ex = Arity8<A, B, C, D, E, F, G, H, I>

    expectTypeOf<Ex>().toEqualTypeOf<
      (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H) => I
    >()
  })
})
