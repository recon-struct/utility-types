import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'
import type { IsNatural } from '~/math/antecedent/is-natural'

describe('IsNatural', () => {
  it('should return true for natural numbers', () => {
    type Ex1 = IsNatural<0>
    type Ex2 = IsNatural<1>
    type Ex3 = IsNatural<2>

    type TestEx1 = Expect<IsEqual<Ex1, true>>
    type TestEx2 = Expect<IsEqual<Ex2, true>>
    type TestEx3 = Expect<IsEqual<Ex3, true>>
  })

  it('should return false for negative numbers', () => {
    type Ex1 = IsNatural<-1>
    type Ex2 = IsNatural<-2>

    type TestEx1 = Expect<IsEqual<Ex1, false>>
    type TestEx2 = Expect<IsEqual<Ex2, false>>
  })

  it('should return false for floating point numbers', () => {
    type Ex1 = IsNatural<0.1>
    type Ex2 = IsNatural<1.1>
    type Ex3 = IsNatural<1.1e100>
    type Ex4 = IsNatural<1.1e-100>
    type Ex5 = IsNatural<1.1e100>
    type Ex6 = IsNatural<-1.1>
    type Ex7 = IsNatural<-1.1e100>
    type Ex8 = IsNatural<-1.1e-100>
    type Ex9 = IsNatural<-1.1e100>

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
