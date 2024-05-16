import { describe, expectTypeOf, it } from 'vitest'
import type { ObjectLength } from '~/object/object-length'

describe('ObjectLength', () => {
  it('returns number of keys in an object', () => {
    type Ex1 = ObjectLength<{ a: 1; b: 2 }>
    type Ex2 = ObjectLength<{ [k: string]: number }>
    type Ex3 = ObjectLength<{ a: 1; b: 2; [k: string]: number }>

    expectTypeOf<Ex1>().toEqualTypeOf<2>()
    expectTypeOf<Ex2>().toEqualTypeOf<number>()
    expectTypeOf<Ex3>().toEqualTypeOf<number>()
  })
})
