import type { Tuple } from '~/tuple/tuple'
import { describe, expectTypeOf, it } from 'vitest'

describe('Tuple', () => {
  it('should be a tuple', () => {
    type Ex1 = Tuple // []
    expectTypeOf<Ex1>().toEqualTypeOf<[]>()
  })

  it('should be a tuple with one element', () => {
    type Ex2 = Tuple<1> // [1]
    expectTypeOf<Ex2>().toEqualTypeOf<[any]>()
  })

  it('should be a tuple with two elements', () => {
    type Ex3 = Tuple<2> // [1, 2]
    expectTypeOf<Ex3>().toEqualTypeOf<[any, any]>()
  })

  it('should be a tuple with three elements', () => {
    type Ex4 = Tuple<3> // [1, 2, 3]
    expectTypeOf<Ex4>().toEqualTypeOf<[any, any, any]>()
  })
})