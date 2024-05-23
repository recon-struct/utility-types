import { describe, it } from 'bun:test'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'
import type { Push } from '~/tuple/push'

describe('Push', () => {
  it('should push `B` onto `A`', () => {
    type Ex1 = Push<['a', 'b'], 'c'> // ['a', 'b', 'c']
    type TestEx1 = Expect<IsEqual<Ex1, ['a', 'b', 'c']>>
  })
})
