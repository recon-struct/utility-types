import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/expect'
import type { ObjectLength } from '~/object/object-length'

describe('ObjectLength', () => {
  it('returns number of keys in an object', () => {
    type Ex1 = ObjectLength<{ a: 1; b: 2 }>
    type Ex2 = ObjectLength<{ a: 1; b: 2; c: { d: 3 } }>
    type Ex3 = ObjectLength<{ [k: string]: number }>
    type Ex4 = ObjectLength<{ a: 1; b: 2; [k: string]: number }>

    type TestEx1 = Expect<IsEqual<Ex1, 2>>
    type TestEx2 = Expect<IsEqual<Ex2, 3>>
    type TestEx3 = Expect<IsEqual<Ex3, number>>
    type TestEx4 = Expect<IsEqual<Ex4, number>>
  })
})
