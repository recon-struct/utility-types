import { describe, expectTypeOf, it } from 'vitest'
import type { AnyArray } from '~/any/any-array'

describe('AnyArray', () => {
  it('should equal any[]', () => {
    expectTypeOf<AnyArray>().toEqualTypeOf<any[] | readonly any[]>()
  })

  it('should create an array of type A', () => {
    type Ex1 = AnyArray<number>
    type Ex2 = AnyArray<string>
    type Ex3 = AnyArray<boolean>

    expectTypeOf<Ex1>().toEqualTypeOf<number[] | readonly number[]>()
    expectTypeOf<Ex2>().toEqualTypeOf<string[] | readonly string[]>()
    expectTypeOf<Ex3>().toEqualTypeOf<boolean[] | readonly boolean[]>()
  })
})
