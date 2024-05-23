import { describe, it } from 'bun:test'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'
import type { Subtract } from '~/math/subtract'

describe('Subtract', () => {
  it('should subtract two numbers', () => {
    type Ex1 = Subtract<3, 2>
    type Ex2 = Subtract<5, 3>

    type TestEx1 = Expect<IsEqual<Ex1, 1>>
    type TestEx2 = Expect<IsEqual<Ex2, 2>>
  })
})
