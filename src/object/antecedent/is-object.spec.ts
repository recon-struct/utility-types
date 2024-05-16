import { describe, expectTypeOf, it } from 'vitest'
import type { IsObject } from '~/object/antecedent/is-object'

describe('IsObject', () => {
  it('should return true if A extends AnyObject', () => {
    type Ex1 = IsObject<{ a: true }>
    type Ex2 = IsObject<[1, 2, 3]>
    type Ex3 = IsObject<string[]>
    type Ex4 = IsObject<Array<string | number>>
    type Ex5 = IsObject<() => void>

    expectTypeOf<Ex1>().toEqualTypeOf<true>()
    expectTypeOf<Ex2>().toEqualTypeOf<true>()
    expectTypeOf<Ex3>().toEqualTypeOf<true>()
    expectTypeOf<Ex4>().toEqualTypeOf<true>()
    expectTypeOf<Ex5>().toEqualTypeOf<true>()
  })

  it('should return false if A does not extend AnyObject', () => {
    type Ex = IsObject<boolean>

    expectTypeOf<Ex>().toEqualTypeOf<false>()
  })
})
