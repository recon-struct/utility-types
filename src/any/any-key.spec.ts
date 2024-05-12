import { describe, expectTypeOf, it } from 'vitest'
import type { AnyKey } from '~/any/any-key'

describe('AnyKey', () => {
  it('should equal string | number | symbol', () => {
    expectTypeOf<AnyKey>().toEqualTypeOf<string | number | symbol>()
  })

  it('should equal PropertyKey', () => {
    expectTypeOf<AnyKey>().toEqualTypeOf<PropertyKey>()
  })

  it('should equal `keyof any`', () => {
    expectTypeOf<AnyKey>().toEqualTypeOf<keyof any>()
  })
})
