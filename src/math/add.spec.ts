import { describe, it } from 'bun:test'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'
import type { Add } from '~/math/add'

describe('Add', () => {
  it('should add two numbers', () => {
    type Ex1 = Add<1, 2>
    type Ex2 = Add<2, 3>

    type TestEx1 = Expect<IsEqual<Ex1, 3>>
    type TestEx2 = Expect<IsEqual<Ex2, 5>>
  })
})
