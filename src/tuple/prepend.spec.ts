import { describe, it } from 'bun:test'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'
import type { Prepend } from '~/tuple/prepend'

describe('Prepend', () => {
  it('should add an element to the beginning of `A`', () => {
    type Ex1 = Prepend<['b', 'c'], 'a'> // ['a', 'b', 'c']
    type TestEx1 = Expect<IsEqual<Ex1, ['a', 'b', 'c']>>
  })
})
