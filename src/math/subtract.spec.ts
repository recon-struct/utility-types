import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/expect'
import type { Subtract } from './subtract'

describe('subtraction', () => {
  it('should subtract two positive numbers', () => {
    type Ex1 = Subtract<42, 21>
    type Ex2 = Subtract<42n, 21n>

    type TestEx1 = Expect<IsEqual<Ex1, 21>>
    type TestEx2 = Expect<IsEqual<Ex2, 21>>
  })
})
