import { describe, expectTypeOf, it } from 'vitest'
import { ArrayConcatIdentity } from './array-concat-identity'

describe('ArrayConcatIdentity', () => {
  it('should equal an empty array', () => {
    expectTypeOf<ArrayConcatIdentity>().toEqualTypeOf<[]>()
  })
})
