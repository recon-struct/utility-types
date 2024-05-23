import { describe, it } from 'bun:test'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Arity6 } from '~/function/arity/arity-6'
import type { Expect } from '~/helper/test'

describe('Arity6', () => {
  it('should be a function with 6 parameters', () => {
    type Ex = Arity6<any, any, any, any, any, any, 1>

    type TestEx = Expect<
      IsEqual<Ex, (a: any, b: any, c: any, d: any, e: any, f: any) => 1>
    >
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

    type TestEx = Expect<IsEqual<Ex, (a: A, b: B, c: C, d: D, e: E, f: F) => G>>
  })
})
