import { describe, expectTypeOf, it } from 'vitest'
import { GeneratorYieldType } from './generator-yield-type'

describe('GeneratorYieldType', () => {
  it('should return the yield type of a generator', () => {
    expectTypeOf<
      GeneratorYieldType<Generator<string, number, number>>
    >().toEqualTypeOf<string>()
  })
})