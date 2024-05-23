import { describe, it } from 'bun:test'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'
import type { IsDivisible } from '~/math/antecedent/is-divisible'

describe('IsDivisible', () => {
  it('should be true', () => {
    type Ex1 = IsDivisible<10, 2>

    type TestEx1 = Expect<IsEqual<Ex1, true>>
  })

  it('should be false', () => {
    type Ex1 = IsDivisible<10, 3>
    type Ex2 = IsDivisible<10, number>
    type Ex3 = IsDivisible<number, 2>

    type TestEx1 = Expect<IsEqual<Ex1, false>>
    type TestEx2 = Expect<IsEqual<Ex2, false>>
    type TestEx3 = Expect<IsEqual<Ex3, false>>
  })
})
