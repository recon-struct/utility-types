import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'
import type { IsTuple } from '~/tuple/antecedent/is-tuple'

describe('IsTuple', () => {
  it('should be true if A is a tuple', () => {
    type Ex1 = IsTuple<[any, any]> // true
    type TestEx1 = Expect<IsEqual<Ex1, true>>
  })

  it('should be false if A is not a tuple', () => {
    type Ex2 = IsTuple<any[]> // false
    type TestEx2 = Expect<IsEqual<Ex2, false>>
  })
})
