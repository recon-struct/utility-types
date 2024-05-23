import { describe, it } from 'bun:test'
import type { ToString } from '~/any/to-string'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'

describe('ToString', () => {
  it('should convert `A` to a string', () => {
    type Ex1 = ToString<123>
    type Ex2 = ToString<'hello'>
    type Ex3 = ToString<true>
    type Ex4 = ToString<false>
    type Ex5 = ToString<null>
    type Ex6 = ToString<undefined>
    type Ex9 = ToString<{ toString(): '123' }>

    type TestEx1 = Expect<IsEqual<Ex1, '123'>>
    type TestEx2 = Expect<IsEqual<Ex2, 'hello'>>
    type TestEx3 = Expect<IsEqual<Ex3, 'true'>>
    type TestEx4 = Expect<IsEqual<Ex4, 'false'>>
    type TestEx5 = Expect<IsEqual<Ex5, 'null'>>
    type TestEx6 = Expect<IsEqual<Ex6, 'undefined'>>
    type TestEx9 = Expect<IsEqual<Ex9, '123'>>
  })
})
