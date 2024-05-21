import { describe, expectTypeOf, it } from 'vitest'
import type { GetPathValue } from '~/object/get-path-value'

describe('GetPathValue', () => {
  it('should get the value at a given path in an object', () => {
    type Obj = { a: { b: 'c' }; d: 'e' }
    type Ex1 = GetPathValue<Obj, ['a', 'b']> // 'c'
    type Ex2 = GetPathValue<Obj, ['d']> // 'e'
    type Ex3 = GetPathValue<Obj, ['a']> // 'c'

    expectTypeOf<Ex1>().toEqualTypeOf<'c'>()
    expectTypeOf<Ex2>().toEqualTypeOf<'e'>()
    expectTypeOf<Ex3>().toEqualTypeOf<{ b: 'c' }>()
  })

  it('should return undefined if the path does not exist', () => {
    type Obj = { a: { b: 'c' } }
    type Ex1 = GetPathValue<Obj, ['z']> // undefined

    expectTypeOf<Ex1>().toEqualTypeOf<undefined>()
  })
})
