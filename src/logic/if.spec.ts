import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/expect'
import type { If } from '~/logic/if'

describe('If', () => {
  it('should evaluate `A → B`', () => {
    type Ex1 = If<true, 'a', 'b'>
    type Ex2 = If<false, 'a', 'b'>

    type TestEx1 = Expect<IsEqual<Ex1, 'a'>>
    type TestEx2 = Expect<IsEqual<Ex2, 'b'>>
  })

  it('should default to returning true if no false case is provided', () => {
    type Ex = If<true>

    type TestEx = Expect<IsEqual<Ex, true>>
  })

  it('should default to returning false if no true case is provided', () => {
    type Ex = If<false>

    type TestEx = Expect<IsEqual<Ex, false>>
  })

  it('should default to returning false if no cases are provided', () => {
    type Ex = If<never>

    type TestEx = Expect<IsEqual<Ex, false>>
  })

  it('should allow overriding the consequent case if true', () => {
    type Ex = If<true, 'a'>

    type TestEx = Expect<IsEqual<Ex, 'a'>>
  })

  it('should default to false for the alternate case if no cases are provided', () => {
    type Ex = If<never, 'a'>

    type TestEx = Expect<IsEqual<Ex, false>>
  })
})
