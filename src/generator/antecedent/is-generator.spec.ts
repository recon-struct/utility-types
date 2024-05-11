import { describe, expectTypeOf, it } from 'vitest'
import { IsGenerator } from './is-generator'

describe('IsGenerator', () => {
  it('should return true if `A` is a generator', () => {
    expectTypeOf<
      IsGenerator<Generator<unknown, unknown>>
    >().toEqualTypeOf<true>()
  })

  it('should return false if `A` is not a generator', () => {
    expectTypeOf<IsGenerator<unknown>>().toEqualTypeOf<false>()
    expectTypeOf<IsGenerator<() => void>>().toEqualTypeOf<false>()
  })
})
