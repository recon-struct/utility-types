import { describe, it } from 'bun:test'
import type { AnyNullish } from '~/any/any-nullish'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'

describe('AnyNullish', () => {
  it('should equal null | undefined', () => {
    type Ex = AnyNullish

    type TestEx = Expect<IsEqual<Ex, null | undefined>>
  })
})
