import { describe, expectTypeOf, it } from 'vitest'
import { IsObjectAssignIdentity } from './is-object-assign-identity'

describe('IsObjectAssignIdentity', () => {
  it('should evaluate if the item is an empty object', () => {
    type Ex1 = IsObjectAssignIdentity<{}>

    expectTypeOf<Ex1>().toEqualTypeOf<true>()
  })

  it('should not match if the item is not an empty object', () => {
    type Ex1 = IsObjectAssignIdentity<any>
    type Ex2 = IsObjectAssignIdentity<{ a: any }>

    expectTypeOf<Ex1>().toEqualTypeOf<false>()
    expectTypeOf<Ex2>().toEqualTypeOf<false>()
  })
})
