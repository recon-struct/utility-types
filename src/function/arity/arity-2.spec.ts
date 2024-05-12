import { describe, expectTypeOf, it } from 'vitest'
import type { Arity2 } from '~/function/arity/arity-2'

describe('Arity2', () => {
  it('should be a function with 2 parameters', () => {
    expectTypeOf<Arity2>().toEqualTypeOf<(a: any, b: any) => any>()
  })

  it('should return a value of type C', () => {
    type A = 'A'
    type B = 'B'
    type C = 'C'
    type Ex1 = Arity2<A, B, C>

    expectTypeOf<Ex1>().toEqualTypeOf<(a: A, b: B) => C>()
  })
})
