import { describe, it } from 'bun:test'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'
import type { Modulo } from '~/math/modulo'

describe('Modulo', () => {
  it('should return the remainder of a division', () => {
    type Ex1 = Modulo<5, 2>
    type Ex2 = Modulo<10, 3>
    type Ex3 = Modulo<10, 5>

    type TestEx1 = Expect<IsEqual<Ex1, 1>>
    type TestEx2 = Expect<IsEqual<Ex2, 1>>
    type TestEx3 = Expect<IsEqual<Ex3, 0>>
  })
})
