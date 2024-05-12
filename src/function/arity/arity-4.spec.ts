import { describe, expectTypeOf, it } from 'vitest'
import type { Arity4 } from '~/function/arity/arity-4'

describe('Arity4', () => {
  it('should be a function with 4 parameters', () => {
    expectTypeOf<Arity4>().toEqualTypeOf<
      (a: any, b: any, c: any, d: any) => any
    >()
  })

  it('should return a value of type E', () => {
    type A = 'A'
    type B = 'B'
    type C = 'C'
    type D = 'D'
    type E = 'E'
    type Ex1 = Arity4<A, B, C, D, E>

    expectTypeOf<Ex1>().toEqualTypeOf<(a: A, b: B, c: C, d: D) => E>()
  })
})
