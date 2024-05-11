import { describe, expectTypeOf, it } from 'vitest'
import { BigIntMultIdentity } from './bigint-mult-identity'

describe('BigIntMultIdentity', () => {
  it('should equal 1n', () => {
    expectTypeOf<BigIntMultIdentity>().toEqualTypeOf<1n>()
  })
})
