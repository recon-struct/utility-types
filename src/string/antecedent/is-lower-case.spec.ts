import { describe, it } from 'bun:test'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'
import type { IsLowerCase } from '~/string/antecedent/is-lower-case'

describe('IsLowerCase', () => {
  it('should return true if `A` is lowercase', () => {
    type Ex1 = IsLowerCase<'a'>
    type Ex2 = IsLowerCase<'abc'>

    type TestEx1 = Expect<IsEqual<Ex1, true>>
    type TestEx2 = Expect<IsEqual<Ex2, true>>
  })

  it('should return false if `A` is not lowercase', () => {
    type Ex1 = IsLowerCase<'A'>
    type Ex2 = IsLowerCase<'Abc'>

    type TestEx1 = Expect<IsEqual<Ex1, false>>
    type TestEx2 = Expect<IsEqual<Ex2, false>>
  })
})
