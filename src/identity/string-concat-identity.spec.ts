import { describe, expectTypeOf, it } from 'vitest'
import type { StringConcatIdentity } from '~/identity/string-concat-identity'

describe('StringConcatIdentity', () => {
  it('should equal ""', () => {
    expectTypeOf<StringConcatIdentity>().toEqualTypeOf<''>()
  })
})
