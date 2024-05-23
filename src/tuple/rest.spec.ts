import { describe, it } from 'bun:test'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'
import type { Rest } from '~/tuple/rest'

describe('Rest', () => {
  it('should get the rest of the elements of `A`', () => {
    type Ex1 = Rest<['a', 'b', 'c']> // ['b', 'c']
    type TestEx1 = Expect<IsEqual<Ex1, ['b', 'c']>>
  })
})
