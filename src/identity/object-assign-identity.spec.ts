import { describe, expectTypeOf, it } from 'vitest'
import type { ObjectAssignIdentity } from '~/identity/object-assign-identity'

describe('ObjectAssignIdentity', () => {
  it('should equal {}', () => {
    expectTypeOf<ObjectAssignIdentity>().toEqualTypeOf<{}>
  })
})
