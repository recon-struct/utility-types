import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { GeneratorYieldType } from '~/generator/generator-yield-type'
import type { Expect } from '~/helper/test'

describe('GeneratorYieldType', () => {
  it('should return the yield type of a generator', () => {
    type Test = Expect<
      IsEqual<GeneratorYieldType<Generator<string, number, number>>, string>
    >
  })
})
