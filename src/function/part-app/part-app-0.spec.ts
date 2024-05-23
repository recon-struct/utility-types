import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { PartApp0 } from '~/function/part-app/part-app-0'
import type { Expect } from '~/helper/test'

describe('PartApp0', () => {
  it('should be a function with 0 arguments', () => {
    type Ex = PartApp0<1>

    type TestEx = Expect<IsEqual<Ex, () => 1>>
  })

  it('should return a value of type A', () => {
    type A = 'A'
    type Ex = PartApp0<A>

    type TestEx = Expect<IsEqual<Ex, () => A>>
  })
})
