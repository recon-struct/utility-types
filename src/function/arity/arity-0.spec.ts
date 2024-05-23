import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Arity0 } from '~/function/arity/arity-0'
import type { Expect } from '~/helper/test'

describe('Arity0', () => {
  it('should be a function with 0 parameters', () => {
    type Ex = Arity0<1>

    type TestEx = Expect<IsEqual<Ex, () => 1>>
  })

  it('should return a value of type A', () => {
    type A = 'A'
    type Ex = Arity0<A>

    type TestEx = Expect<IsEqual<Ex, () => A>>
  })
})
