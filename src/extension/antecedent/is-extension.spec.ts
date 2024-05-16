import { describe, expectTypeOf, it } from 'vitest'
import type { IsExtension } from '~/extension/antecedent/is-extension'

describe('IsExtension', () => {
  it('should return true if `A` extends `B`', () => {
    type Ex1 = IsExtension<string, string | number>
    type Ex2 = IsExtension<number, string | number>
    type Ex3 = IsExtension<'test', string>

    expectTypeOf<Ex1>().toEqualTypeOf<true>()
    expectTypeOf<Ex2>().toEqualTypeOf<true>()
    expectTypeOf<Ex3>().toEqualTypeOf<true>()
  })

  it('should return false if `A` does not extend `B`', () => {
    type Ex1 = IsExtension<[string, 'a'], ['a', string]>
    type Ex2 = IsExtension<['a', string], [string, 'a']>

    expectTypeOf<Ex1>().toEqualTypeOf<false>()
    expectTypeOf<Ex2>().toEqualTypeOf<false>()
  })
})
