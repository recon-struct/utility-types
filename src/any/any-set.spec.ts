import type { AnySet } from '~/any/any-set'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'

describe('AnySet', () => {
  it('should be a Set of any type', () => {
    type TestAnySet = Expect<IsEqual<AnySet, Set<any>>>
  })

  it('should be a set of type A', () => {
    type Ex1 = AnySet<number>
    type Ex2 = AnySet<string>
    type Ex3 = AnySet<boolean>

    type TestEx1 = Expect<IsEqual<Ex1, Set<number>>>
    type TestEx2 = Expect<IsEqual<Ex2, Set<string>>>
    type TestEx3 = Expect<IsEqual<Ex3, Set<boolean>>>
  })
})
