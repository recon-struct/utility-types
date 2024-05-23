import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Arity7 } from '~/function/arity/arity-7'
import type { Expect } from '~/helper/test'

describe('Arity7', () => {
  it('should be a function with 7 parameters', () => {
    type Ex = Arity7<any, any, any, any, any, any, any, 1>

    type TestEx = Expect<
      IsEqual<Ex, (a: any, b: any, c: any, d: any, e: any, f: any, g: any) => 1>
    >
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

    type TestEx = Expect<
      IsEqual<Ex, (a: A, b: B, c: C, d: D, e: E, f: F, g: G) => H>
    >
  })
})
