import { describe, it } from 'bun:test'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'
import type { Unshift } from '~/tuple/unshift'

describe('Unshift', () => {
  it('should add an element to the beginning of `A`', () => {
    type Ex1 = Unshift<['b', 'c'], 'a'> // ['a', 'b', 'c']
    type TestEx1 = Expect<IsEqual<Ex1, ['a', 'b', 'c']>>
  })
})
