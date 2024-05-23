import { describe, it } from 'bun:test'
import type { AnyFalsy } from '~/any/any-falsy'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'

describe('AnyFalsy', () => {
  it("should equal '' | 0 | 0n | false | null | undefined", () => {
    type Ex = AnyFalsy

    type TestEx = Expect<IsEqual<Ex, '' | 0 | 0n | false | null | undefined>>
  })
})
