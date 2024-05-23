import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'
import type { IsInteger } from '~/math/antecedent/is-integer'

describe('IsInteger', () => {
  it('should return true for integers', () => {
    type Ex1 = IsInteger<1>
    type Ex2 = IsInteger<0>
    type Ex3 = IsInteger<-1>

    type TestEx1 = Expect<IsEqual<Ex1, true>>
    type TestEx2 = Expect<IsEqual<Ex2, true>>
    type TestEx3 = Expect<IsEqual<Ex3, true>>
  })

  it('should return false for floating point numbers', () => {
    type Ex1 = IsInteger<0.1>
    type Ex2 = IsInteger<1.1>
    type Ex3 = IsInteger<1.1e100>
    type Ex4 = IsInteger<1.1e-100>
    type Ex5 = IsInteger<1.1e100>
    type Ex6 = IsInteger<-1.1>
    type Ex7 = IsInteger<-1.1e100>
    type Ex8 = IsInteger<-1.1e-100>
    type Ex9 = IsInteger<-1.1e100>

    type TestEx1 = Expect<IsEqual<Ex1, false>>
    type TestEx2 = Expect<IsEqual<Ex2, false>>
    type TestEx3 = Expect<IsEqual<Ex3, false>>
    type TestEx4 = Expect<IsEqual<Ex4, false>>
    type TestEx5 = Expect<IsEqual<Ex5, false>>
    type TestEx6 = Expect<IsEqual<Ex6, false>>
    type TestEx7 = Expect<IsEqual<Ex7, false>>
    type TestEx8 = Expect<IsEqual<Ex8, false>>
    type TestEx9 = Expect<IsEqual<Ex9, false>>
  })
})
