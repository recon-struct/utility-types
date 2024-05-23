import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Arity2 } from '~/function/arity/arity-2'
import type { Expect } from '~/helper/test'

describe('Arity2', () => {
  it('should be a function with 2 parameters', () => {
    type Ex = Arity2<any, any, 1>

    type TestEx = Expect<IsEqual<Ex, (a: any, b: any) => 1>>
  })

  it('should return a value of type C', () => {
    type A = 'A'
    type B = 'B'
    type C = 'C'
    type Ex = Arity2<A, B, C>

    type TestEx = Expect<IsEqual<Ex, (a: A, b: B) => C>>
  })
})
