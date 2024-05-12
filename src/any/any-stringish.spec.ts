import { describe, expectTypeOf, it } from 'vitest'
import type { AnyStringish } from '~/any/any-stringish'

describe('AnyStringish', () => {
  it('should be a union of all TypeScript type that can be coercedto a string easily.', () => {
    expectTypeOf<AnyStringish>().toEqualTypeOf<
      string | number | bigint | boolean | null | undefined
    >()
  })
})
