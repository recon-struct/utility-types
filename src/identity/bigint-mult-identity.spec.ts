import { describe, it } from 'bun:test'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'
import type { BigIntMultIdentity } from '~/identity/bigint-mult-identity'

describe('BigIntMultIdentity', () => {
  it('should equal 1n', () => {
    type TestBigIntMultIdentity = Expect<IsEqual<BigIntMultIdentity, 1n>>
  })
})
