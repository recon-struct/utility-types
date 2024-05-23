import { describe, it } from 'bun:test'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { GeneratorNextType } from '~/generator/generator-next-type'
import type { Expect } from '~/helper/test'

describe('GeneratorNextType', () => {
  it('should return the next type of a generator', () => {
    type Test = Expect<
      IsEqual<GeneratorNextType<Generator<number, number, string>>, string>
    >
  })
})
