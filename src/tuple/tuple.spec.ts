import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/expect'
import type { Tuple } from '~/tuple/tuple'

describe('Tuple', () => {
  it('should be a tuple', () => {
    type Ex1 = Tuple // []
    type TestEx1 = Expect<IsEqual<Ex1, []>>
  })

  it('should be a tuple with one element', () => {
    type Ex2 = Tuple<1> // [1]
    type TestEx2 = Expect<IsEqual<Ex2, [any]>>
  })

  it('should be a tuple with two elements', () => {
    type Ex3 = Tuple<2> // [1, 2]
    type TestEx3 = Expect<IsEqual<Ex3, [any, any]>>
  })

  it('should be a tuple with three elements', () => {
    type Ex4 = Tuple<3> // [1, 2, 3]
    type TestEx4 = Expect<IsEqual<Ex4, [any, any, any]>>
  })
})
