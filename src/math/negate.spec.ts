import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/expect'
import type { Negate } from './negate'

describe('negate', () => {
  it('should negate a positive number', () => {
    type Ex1 = Negate<42>
    type Ex2 = Negate<42n>

    type TestEx1 = Expect<IsEqual<Ex1, -42>>
    type TestEx2 = Expect<IsEqual<Ex2, -42>>
  })

  it('should negate a negative number', () => {
    type Ex1 = Negate<-42>
    type Ex2 = Negate<-42n>

    type TestEx1 = Expect<IsEqual<Ex1, 42>>
    type TestEx2 = Expect<IsEqual<Ex2, 42>>
  })

  it('should negate zero', () => {
    type Ex1 = Negate<0>
    type Ex2 = Negate<0n>

    type TestEx = Expect<IsEqual<Ex1, 0>>
    type TestEx2 = Expect<IsEqual<Ex2, 0>>
  })
})
