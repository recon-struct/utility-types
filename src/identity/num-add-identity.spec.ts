import { describe, expectTypeOf, it } from 'vitest'
import type { NumAddIdentity } from '~/identity/num-add-identity'

describe('NumAddIdentity', () => {
  it('should equal 0', () => {
    expectTypeOf<NumAddIdentity>().toEqualTypeOf<0>()
  })
})
