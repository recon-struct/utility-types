import { describe, expectTypeOf, it } from 'vitest'
import type { ArrayConcatIdentity } from '~/identity/array-concat-identity'

describe('ArrayConcatIdentity', () => {
  it('should equal an empty array', () => {
    expectTypeOf<ArrayConcatIdentity>().toEqualTypeOf<[]>()
  })
})
