import { describe, it } from 'bun:test'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'
import type { Reverse } from '~/tuple/reverse'

describe('Reverse', () => {
  it('should reverse the elements of `A`', () => {
    type Ex1 = Reverse<['a', 'b', 'c']> // ['c', 'b', 'a']
    type TestEx1 = Expect<IsEqual<Ex1, ['c', 'b', 'a']>>
  })
})
