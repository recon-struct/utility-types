import { describe, expectTypeOf, it } from 'vitest'
import { BigIntAddIdentity } from './bigint-add-identity'

describe('BigIntAddIdentity', () => {
  it('should equal 0n', () => {
    expectTypeOf<BigIntAddIdentity>().toEqualTypeOf<0n>()
  })
})
