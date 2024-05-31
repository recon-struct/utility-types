import type { AnyPrimitive } from '~/any/any-primitive'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/expect'

describe('AnyPrimitive', () => {
  it('should be a union of all primitive types', () => {
    type Ex = AnyPrimitive

    type TestEx = Expect<
      IsEqual<
        Ex,
        string | number | bigint | boolean | symbol | undefined | null
      >
    >
  })
})
