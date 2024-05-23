import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { PartApp1 } from '~/function/part-app/part-app-1'
import type { Expect } from '~/helper/test'

describe('PartApp1', () => {
  it('should be a function with 1 argument', () => {
    type Ex = PartApp1

    type TestEx = Expect<IsEqual<Ex, (a: any) => 1>>
  })

  it('should return a value of type B', () => {
    type A = 'A'
    type B = 'B'
    type Ex = PartApp1<A, B>

    type TestEx = Expect<IsEqual<Ex, (a: A) => B>>
  })
})
