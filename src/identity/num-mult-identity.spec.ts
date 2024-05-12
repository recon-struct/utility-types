import { describe, expectTypeOf, it } from 'vitest'
import type { NumMultIdentity } from '~/identity/num-mult-identity'

describe('NumMultIdentity', () => {
  it('should equal 1', () => {
    expectTypeOf<NumMultIdentity>().toEqualTypeOf<1>()
  })
})
