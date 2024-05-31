import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Arity4 } from '~/function/arity/arity-4'
import type { Expect } from '~/helper/expect'

describe('Arity4', () => {
  it('should be a function with 4 parameters', () => {
    type Ex = Arity4<any, any, any, any, 1>

    type TestEx = Expect<IsEqual<Ex, (a: any, b: any, c: any, d: any) => 1>>
  })

  it('should return a value of type E', () => {
    type A = 'A'
    type B = 'B'
    type C = 'C'
    type D = 'D'
    type E = 'E'
    type Ex = Arity4<A, B, C, D, E>

    type TestEx = Expect<IsEqual<Ex, (a: A, b: B, c: C, d: D) => E>>
  })
})
