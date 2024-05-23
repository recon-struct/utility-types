import { describe, it } from 'bun:test'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'
import type { ArrayConcatIdentity } from '~/identity/array-concat-identity'

describe('ArrayConcatIdentity', () => {
  it('should equal an empty array', () => {
    type TestArrayConcatIdentity = Expect<IsEqual<ArrayConcatIdentity, []>>
  })
})
