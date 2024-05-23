import { describe, it } from 'bun:test'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'
import type { BigIntAddIdentity } from '~/identity/bigint-add-identity'

describe('BigIntAddIdentity', () => {
  it('should equal 0n', () => {
    type TestBigIntAddIdentity = Expect<IsEqual<BigIntAddIdentity, 0n>>
  })
})
