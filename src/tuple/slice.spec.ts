import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/expect'
import type { Slice } from '~/tuple/slice'

describe('Slice', () => {
  it('should slice the elements of `A`', () => {
    type Ex1 = Slice<['a', 'b', 'c', 'd', 'e'], 1, 3> // ['b', 'c']
    type TestEx1 = Expect<IsEqual<Ex1, ['b', 'c']>>
  })

  it('should support negative indexes', () => {
    type Ex1 = Slice<['a', 'b', 'c', 'd', 'e'], 1, -1> // ['b', 'c', 'd']
    type TestEx1 = Expect<IsEqual<Ex1, ['b', 'c', 'd']>>
  })
})
