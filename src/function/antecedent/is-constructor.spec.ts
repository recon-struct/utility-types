import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { IsConstructor } from '~/function/antecedent/is-constructor'
import type { Expect } from '~/helper/test'

describe('IsConstructor', () => {
  it('hould return true if the function is a constructor', () => {
    type Ex = IsConstructor<new () => void>

    type TestEx = Expect<IsEqual<Ex, true>>
  })

  it('should return false if the function is not a constructor', () => {
    type Ex1 = IsConstructor<() => void>
    type Ex2 = IsConstructor<Function>

    type TestEx1 = Expect<IsEqual<Ex1, false>>
    type TestEx2 = Expect<IsEqual<Ex2, false>>
  })
})
