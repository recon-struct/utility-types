import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/expect'
import type { IsFloat } from './is-float'

describe('IsFloat', () => {
  it('should return true for floating-point numbers', () => {
    type Ex1 = IsFloat<3.14>
    type Ex2 = IsFloat<0.1>
    type Ex3 = IsFloat<-3.14>

    type TestEx1 = Expect<IsEqual<Ex1, true>>
    type TestEx2 = Expect<IsEqual<Ex2, true>>
    type TestEx3 = Expect<IsEqual<Ex3, true>>
  })

  it('should return false for non-floating-point numbers', () => {
    type Ex1 = IsFloat<3>
    type Ex2 = IsFloat<0>
    type Ex3 = IsFloat<-3>

    type TestEx1 = Expect<IsEqual<Ex1, false>>
    type TestEx2 = Expect<IsEqual<Ex2, false>>
    type TestEx3 = Expect<IsEqual<Ex3, false>>
  })
})
