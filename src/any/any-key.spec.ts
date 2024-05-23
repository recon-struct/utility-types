import { describe, it } from 'bun:test'
import type { AnyKey } from '~/any/any-key'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'

describe('AnyKey', () => {
  it('should equal string | number | symbol', () => {
    type Ex = AnyKey

    type TestEx = Expect<IsEqual<Ex, string | number | symbol>>
  })

  it('should equal PropertyKey', () => {
    type Ex = AnyKey

    type TestEx = Expect<IsEqual<Ex, PropertyKey>>
  })

  it('should equal `keyof any`', () => {
    type Ex = AnyKey

    type TestEx = Expect<IsEqual<Ex, keyof any>>
  })
})
