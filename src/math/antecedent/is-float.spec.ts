import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'
import type { IsFloat } from '~/math/antecedent/is-float'

describe('IsFloat', () => {
  it('should return true for floating point numbers', () => {
    type Ex1 = IsFloat<0.1>
    type Ex2 = IsFloat<1.1>
    type Ex3 = IsFloat<1.1e100>
    type Ex4 = IsFloat<1.1e-100>
    type Ex5 = IsFloat<1.1e100>
    type Ex6 = IsFloat<-1.1>
    type Ex7 = IsFloat<-1.1e100>
    type Ex8 = IsFloat<-1.1e-100>
    type Ex9 = IsFloat<-1.1e100>

    type TestEx1 = Expect<IsEqual<Ex1, true>>
    type TestEx2 = Expect<IsEqual<Ex2, true>>
    type TestEx3 = Expect<IsEqual<Ex3, true>>
    type TestEx4 = Expect<IsEqual<Ex4, true>>
    type TestEx5 = Expect<IsEqual<Ex5, true>>
    type TestEx6 = Expect<IsEqual<Ex6, true>>
    type TestEx7 = Expect<IsEqual<Ex7, true>>
    type TestEx8 = Expect<IsEqual<Ex8, true>>
    type TestEx9 = Expect<IsEqual<Ex9, true>>
  })
})
