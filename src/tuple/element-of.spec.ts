import { describe, it } from 'bun:test'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'
import type { ElementOf } from '~/tuple/element-of'

describe('ElementOf', () => {
  it('should get the elements of `A`', () => {
    type Ex1 = ElementOf<['a', 'b', 'c']> // 'a' | 'b' | 'c'
    type TestEx1 = Expect<IsEqual<Ex1, 'a' | 'b' | 'c'>>
  })
})
