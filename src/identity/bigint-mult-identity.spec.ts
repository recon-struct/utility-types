import { describe, expectTypeOf, it } from 'vitest'
import type { BigIntMultIdentity } from '~/identity/bigint-mult-identity'

describe('BigIntMultIdentity', () => {
  it('should equal 1n', () => {
    expectTypeOf<BigIntMultIdentity>().toEqualTypeOf<1n>()
  })
})
