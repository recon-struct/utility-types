import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'
import type { Divide } from '~/math/divide'

describe('Divide', () => {
  it('should divide two numbers', () => {
    type Ex1 = Divide<4, 2>
    type Ex2 = Divide<6, 3>

    type TestEx1 = Expect<IsEqual<Ex1, 2>>
    type TestEx2 = Expect<IsEqual<Ex2, 2>>
  })
})
