import { describe, expectTypeOf, it } from 'vitest'
import { GeneratorNextType } from './generator-next-type'

describe('GeneratorNextType', () => {
  it('should return the next type of a generator', () => {
    expectTypeOf<
      GeneratorNextType<Generator<number, number, string>>
    >().toEqualTypeOf<string>()
  })
})
