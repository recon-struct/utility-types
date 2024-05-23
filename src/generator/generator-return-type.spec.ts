import { describe, it } from 'bun:test'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { GeneratorReturnType } from '~/generator/generator-return-type'
import type { Expect } from '~/helper/test'

describe('GeneratorReturnType', () => {
  it('should return the return type of a generator', () => {
    type Test = Expect<
      IsEqual<GeneratorReturnType<Generator<number, string, number>>, string>
    >
  })
})
