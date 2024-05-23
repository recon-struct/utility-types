import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { IsGenerator } from '~/generator/antecedent/is-generator'
import type { Expect } from '~/helper/test'

describe('IsGenerator', () => {
  it('should return true if `A` is a generator', () => {
    type Test = Expect<IsEqual<IsGenerator<Generator<unknown, unknown>>, true>>
  })

  it('should return false if `A` is not a generator', () => {
    type Test1 = Expect<IsEqual<IsGenerator<unknown>, false>>
    type Test2 = Expect<IsEqual<IsGenerator<() => void>, false>>
  })
})
