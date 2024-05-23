import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'
import type { LengthProp } from '~/object/length-prop'

describe('LengthProp', () => {
  it('returns length of a string', () => {
    type Ex = LengthProp<{ length: 20 }>
    type TestEx = Expect<IsEqual<Ex, 20>>
  })

  it('returns length of a tuple', () => {
    type Ex = LengthProp<[1, 2, 3]>
    type TestEx = Expect<IsEqual<Ex, 3>>
  })
})
