import { describe, it } from 'bun:test'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'
import type { NumAddIdentity } from '~/identity/num-add-identity'

describe('NumAddIdentity', () => {
  it('should equal 0', () => {
    type TestNumAddIdentity = Expect<IsEqual<NumAddIdentity, 0>>
  })
})
