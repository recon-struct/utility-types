import { describe, expectTypeOf, it } from 'vitest'
import { ObjectAssignIdentity } from './object-assign-identity'

describe('ObjectAssignIdentity', () => {
  it('should equal {}', () => {
    expectTypeOf<ObjectAssignIdentity>().toEqualTypeOf<{}>
  })
})
