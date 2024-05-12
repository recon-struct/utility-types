import { describe, expectTypeOf, it } from 'vitest'
import type { Arity3 } from '~/function/arity/arity-3'

describe('Arity3', () => {
  it('should be a function with 3 parameters', () => {
    expectTypeOf<Arity3>().toEqualTypeOf<(a: any, b: any, c: any) => any>()
  })

  it('should return a value of type D', () => {
    type A = 'A'
    type B = 'B'
    type C = 'C'
    type D = 'D'
    type Ex1 = Arity3<A, B, C, D>

    expectTypeOf<Ex1>().toEqualTypeOf<(a: A, b: B, c: C) => D>()
  })
})
