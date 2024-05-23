import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Arity8 } from '~/function/arity/arity-8'
import type { Expect } from '~/helper/test'

describe('Arity8', () => {
  it('should be a function with 8 parameters', () => {
    type Ex = Arity8<any, any, any, any, any, any, any, any, 1>

    type TestEx = Expect<
      IsEqual<
        Ex,
        (a: any, b: any, c: any, d: any, e: any, f: any, g: any, h: any) => 1
      >
    >
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

    type TestEx = Expect<
      IsEqual<Ex, (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H) => I>
    >
  })
})
