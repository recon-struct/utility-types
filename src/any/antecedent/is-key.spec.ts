import { describe, it } from 'bun:test'
import type { IsKey } from '~/any/antecedent/is-key'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'

describe('IsKey', () => {
  it('should return true if A extends string | number', () => {
    type Ex1 = IsKey<'hello'>
    type Ex2 = IsKey<string>
    type Ex3 = IsKey<1>
    type Ex4 = IsKey<number>
    type Ex5 = IsKey<'hello' | 1>
    type Ex6 = IsKey<string | 1>
    type Ex7 = IsKey<string | number>
    type Ex8 = IsKey<'hello' | 1 | 'world' | 2>
    type Ex9 = IsKey<string | 1 | 'world' | 2>
    type Ex10 = IsKey<string | number | 'world' | 2>

    type TestEx1 = Expect<IsEqual<Ex1, true>>
    type TestEx2 = Expect<IsEqual<Ex2, true>>
    type TestEx3 = Expect<IsEqual<Ex3, true>>
    type TestEx4 = Expect<IsEqual<Ex4, true>>
    type TestEx5 = Expect<IsEqual<Ex5, true>>
    type TestEx6 = Expect<IsEqual<Ex6, true>>
    type TestEx7 = Expect<IsEqual<Ex7, true>>
    type TestEx8 = Expect<IsEqual<Ex8, true>>
    type TestEx9 = Expect<IsEqual<Ex9, true>>
    type TestEx10 = Expect<IsEqual<Ex10, true>>
  })

  it('should return false if A does not extend string | number', () => {
    type Ex1 = IsKey<true>
    type Ex2 = IsKey<boolean>
    type Ex3 = IsKey<undefined>
    type Ex4 = IsKey<null>

    type TestEx1 = Expect<IsEqual<Ex1, false>>
    type TestEx2 = Expect<IsEqual<Ex2, false>>
    type TestEx3 = Expect<IsEqual<Ex3, false>>
    type TestEx4 = Expect<IsEqual<Ex4, false>>
  })

  it('should return boolean if A is a union that extends string | number', () => {
    type Ex1 = IsKey<true | 'hello'>
    type Ex2 = IsKey<boolean | 1>
    type Ex3 = IsKey<undefined | 'world'>
    type Ex4 = IsKey<null | 2>

    type TestEx1 = Expect<IsEqual<Ex1, boolean>>
    type TestEx2 = Expect<IsEqual<Ex2, boolean>>
    type TestEx3 = Expect<IsEqual<Ex3, boolean>>
    type TestEx4 = Expect<IsEqual<Ex4, boolean>>
  })
})
