import { describe, it } from 'bun:test'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'
import type { Increment } from '~/math/increment'

describe('Increment', () => {
  it('should increment a number', () => {
    type Ex1 = Increment<0>
    type Ex2 = Increment<1>

    type TestEx1 = Expect<IsEqual<Ex1, 1>>
    type TestEx2 = Expect<IsEqual<Ex2, 2>>
  })
})
