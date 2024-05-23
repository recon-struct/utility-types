import { describe, it } from 'bun:test'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'
import type { Includes } from '~/string/antecedent/includes'

describe('Includes', () => {
  it('should return true if `A` includes `B`', () => {
    type Ex = Includes<'abc', 'b'>

    type TestEx = Expect<IsEqual<Ex, true>>
  })

  it('should return false if `A` does not include `B`', () => {
    type Ex = Includes<'abc', 'd'>

    type TestEx = Expect<IsEqual<Ex, false>>
  })
})
