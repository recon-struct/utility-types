import { describe, expectTypeOf, it } from 'vitest'
import type { AnyMap } from '~/any/any-map'

describe('AnyMap', () => {
  it('should equal Map<any, any>', () => {
    expectTypeOf<AnyMap>().toEqualTypeOf<Map<any, any>>()
  })

  it('should create a map with keys of type K and values of any', () => {
    type Ex1 = AnyMap<number>
    type Ex2 = AnyMap<string>
    type Ex3 = AnyMap<boolean>

    expectTypeOf<Ex1>().toEqualTypeOf<Map<number, any>>()
    expectTypeOf<Ex2>().toEqualTypeOf<Map<string, any>>()
    expectTypeOf<Ex3>().toEqualTypeOf<Map<boolean, any>>()
  })

  it('should create a map with keys of type K and values of type V', () => {
    type Ex1 = AnyMap<number, string>
    type Ex2 = AnyMap<string, boolean>
    type Ex3 = AnyMap<boolean, number>

    expectTypeOf<Ex1>().toEqualTypeOf<Map<number, string>>()
    expectTypeOf<Ex2>().toEqualTypeOf<Map<string, boolean>>()
    expectTypeOf<Ex3>().toEqualTypeOf<Map<boolean, number>>()
  })
})
