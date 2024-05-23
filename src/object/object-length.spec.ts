import { describe, it } from 'bun:test'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'
import type { ObjectLength } from '~/object/object-length'

describe('ObjectLength', () => {
  it('returns number of keys in an object', () => {
    type Ex1 = ObjectLength<{ a: 1; b: 2 }>
    type Ex2 = ObjectLength<{ [k: string]: number }>
    type Ex3 = ObjectLength<{ a: 1; b: 2; [k: string]: number }>

    type TestEx1 = Expect<IsEqual<Ex1, 2>>
    type TestEx2 = Expect<IsEqual<Ex2, number>>
    type TestEx3 = Expect<IsEqual<Ex3, number>>
  })
})
