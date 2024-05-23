import { describe, it } from 'bun:test'
import type { IsString } from '~/any/antecedent/primitives/is-string'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'

describe('IsString', () => {
  it('should return true if A extends string', () => {
    type Ex1 = IsString<'hello'>
    type Ex2 = IsString<string>

    type TestEx1 = Expect<IsEqual<Ex1, true>>
    type TestEx2 = Expect<IsEqual<Ex2, true>>
  })

  it('should return false if A does not extend string', () => {
    type Ex1 = IsString<1>
    type Ex2 = IsString<number>

    type TestEx1 = Expect<IsEqual<Ex1, false>>
    type TestEx2 = Expect<IsEqual<Ex2, false>>
  })

  it('should return boolean if A is a union that extends string', () => {
    type Ex1 = IsString<1 | 'hello'>
    type Ex2 = IsString<number | string>

    type TestEx1 = Expect<IsEqual<Ex1, boolean>>
    type TestEx2 = Expect<IsEqual<Ex2, boolean>>
  })
})
