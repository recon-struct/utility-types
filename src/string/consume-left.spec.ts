import { describe, it } from 'bun:test'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'
import type { ConsumeLeft } from '~/string/consume-left'

describe('ConsumeLeft', () => {
  it('should consume the left side of a string', () => {
    type Ex1 = ConsumeLeft<'llo', 'hello'>
    type Ex2 = ConsumeLeft<'World', 'helloWorld'>
    type Ex3 = ConsumeLeft<'23', 'hello123'>

    type TestEx1 = Expect<IsEqual<Ex1, 'he'>>
    type TestEx2 = Expect<IsEqual<Ex2, 'hello'>>
    type TestEx3 = Expect<IsEqual<Ex3, 'hello1'>>
  })
})
