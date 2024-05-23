import { describe, it } from 'bun:test'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'
import type { Last } from '~/tuple/last'

describe('Last', () => {
  it('should get the last element of `A`', () => {
    type Ex1 = Last<['a', 'b', 'c']> // 'c'
    type TestEx1 = Expect<IsEqual<Ex1, 'c'>>
  })
})
