import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'
import type { Split } from '~/string/split'

describe('Split', () => {
  it('should split a string', () => {
    type Ex1 = Split<'hello world', ' '>
    type Ex2 = Split<'hello world', 'o'>
    type Ex3 = Split<'hello world', 'l'>
    type Ex4 = Split<'hello world', 'd'>
    type Ex5 = Split<'hello world', 'h'>

    type TestEx1 = Expect<IsEqual<Ex1, ['hello', 'world']>>
    type TestEx2 = Expect<IsEqual<Ex2, ['hell', ' w', 'rld']>>
    type TestEx3 = Expect<IsEqual<Ex3, ['he', '', 'o wor', 'd']>>
    type TestEx4 = Expect<IsEqual<Ex4, ['hello worl', '']>>
    type TestEx5 = Expect<IsEqual<Ex5, ['', 'ello world']>>
  })
})
