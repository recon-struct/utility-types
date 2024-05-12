import { describe, expectTypeOf, it } from 'vitest'
import type { AnyPrimitive } from '~/any/any-primitive'

describe('AnyPrimitive', () => {
  it('should be a union of all primitive types', () => {
    expectTypeOf<AnyPrimitive>().toEqualTypeOf<
      string | number | bigint | boolean | symbol | undefined | null
    >()
  })
})
