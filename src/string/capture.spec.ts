import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/expect'
import type { Capture } from '~/string/capture'

describe('Capture', () => {
  it('should capture the start and end of a string', () => {
    type Ex1 = Capture<'hello {{world}}'>
    type Ex2 = Capture<'{{a}} {{b}} {{c}}'>

    type TestEx1 = Expect<IsEqual<Ex1, 'world'>>
    type TestEx2 = Expect<IsEqual<Ex2, 'a' | 'b' | 'c'>>
  })

  it('should capture the start and end of a string with custom capture group', () => {
    type Ex1 = Capture<'hello ${world}', { start: '${'; end: '}' }>
    type Ex2 = Capture<'${a} ${b} ${c}', { start: '${'; end: '}' }>

    type TestEx1 = Expect<IsEqual<Ex1, 'world'>>
    type TestEx2 = Expect<IsEqual<Ex2, 'a' | 'b' | 'c'>>
  })
})
