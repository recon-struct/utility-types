import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { ToNaturalNumber } from '~/helper/to-natural-number'
import type { Expect } from './test'

describe('ToNaturalNumber', () => {
  it('should convert a string to a natural number', () => {
    type Ex1 = ToNaturalNumber<'0'>
    type Ex2 = ToNaturalNumber<'1'>
    type Ex3 = ToNaturalNumber<'99'>

    type TestEx1 = Expect<IsEqual<Ex1, 0>>
    type TestEx2 = Expect<IsEqual<Ex2, 1>>
    type TestEx3 = Expect<IsEqual<Ex3, 99>>
  })
})
