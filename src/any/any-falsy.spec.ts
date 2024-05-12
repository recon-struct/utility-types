import { describe, expectTypeOf, it } from 'vitest'
import type { AnyFalsy } from '~/any/any-falsy'

describe('AnyFalsy', () => {
  it("should equal '' | 0 | 0n | false | null | undefined", () => {
    expectTypeOf<AnyFalsy>().toEqualTypeOf<
      '' | 0 | 0n | false | null | undefined
    >()
  })
})
