import { describe, expectTypeOf, it } from 'vitest'
import type { AnyNullish } from '~/any/any-nullish'

describe('AnyNullish', () => {
  it('should equal null | undefined', () => {
    expectTypeOf<AnyNullish>().toEqualTypeOf<null | undefined>()
  })
})
