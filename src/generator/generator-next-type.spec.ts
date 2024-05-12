import { describe, expectTypeOf, it } from 'vitest'
import type { GeneratorNextType } from '~/generator/generator-next-type'

describe('GeneratorNextType', () => {
  it('should return the next type of a generator', () => {
    expectTypeOf<
      GeneratorNextType<Generator<number, number, string>>
    >().toEqualTypeOf<string>()
  })
})
