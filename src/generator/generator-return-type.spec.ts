import { describe, expectTypeOf, it } from 'vitest'
import type { GeneratorReturnType } from '~/generator/generator-return-type'

describe('GeneratorReturnType', () => {
  it('should return the return type of a generator', () => {
    expectTypeOf<
      GeneratorReturnType<Generator<number, string, number>>
    >().toEqualTypeOf<string>()
  })
})
