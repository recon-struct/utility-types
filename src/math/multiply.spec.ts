import { describe, it } from 'bun:test'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'
import type { Multiply } from '~/math/multiply'

describe('Multiply', () => {
  it('should multiply two numbers', () => {
    type Ex1 = Multiply<1, 2>
    type Ex2 = Multiply<2, 3>

    type TestEx1 = Expect<IsEqual<Ex1, 2>>
    type TestEx2 = Expect<IsEqual<Ex2, 6>>
  })
})
