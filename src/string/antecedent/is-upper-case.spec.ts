import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/expect'
import type { IsUpperCase } from '~/string/antecedent/is-upper-case'

describe('IsUpperCase', () => {
  it('should return true if `A` is uppercase', () => {
    type Ex1 = IsUpperCase<'A'>
    type Ex2 = IsUpperCase<'ABC'>

    type TestEx1 = Expect<IsEqual<Ex1, true>>
    type TestEx2 = Expect<IsEqual<Ex2, true>>
  })

  it('should return false if `A` is not uppercase', () => {
    type Ex1 = IsUpperCase<'a'>
    type Ex2 = IsUpperCase<'abc'>

    type TestEx1 = Expect<IsEqual<Ex1, false>>
    type TestEx2 = Expect<IsEqual<Ex2, false>>
  })
})
