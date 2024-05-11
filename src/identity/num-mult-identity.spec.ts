import { describe, expectTypeOf, it } from 'vitest'
import { NumMultIdentity } from './num-mult-identity'

describe('NumMultIdentity', () => {
  it('should equal 1', () => {
    expectTypeOf<NumMultIdentity>().toEqualTypeOf<1>()
  })
})
