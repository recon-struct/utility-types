import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'
import type { ConsumeRight } from '~/string/consume-right'

describe('ConsumeRight', () => {
  it('should consume the right side of a string', () => {
    type Ex1 = ConsumeRight<'he', 'hello'>
    type Ex2 = ConsumeRight<'hello', 'helloWorld'>
    type Ex3 = ConsumeRight<'hello', 'hello123'>

    type TestEx1 = Expect<IsEqual<Ex1, 'llo'>>
    type TestEx2 = Expect<IsEqual<Ex2, 'World'>>
    type TestEx3 = Expect<IsEqual<Ex3, '123'>>
  })
})
