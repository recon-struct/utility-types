import { describe, expectTypeOf, it } from 'vitest'
import type { AnyKey } from '~/any/any-key'
import type { AnyObject } from '~/any/any-object'

describe('AnyObject', () => {
  it('should equal Record<any, any>', () => {
    expectTypeOf<AnyObject>().toEqualTypeOf<Record<AnyKey, any>>()
  })

  it('should create an object with keys of type A and values of any', () => {
    type Ex1 = AnyObject<string>
    type Ex2 = AnyObject<number>
    type Ex3 = AnyObject<symbol>

    expectTypeOf<Ex1>().toEqualTypeOf<Record<string, any>>()
    expectTypeOf<Ex2>().toEqualTypeOf<Record<number, any>>()
    expectTypeOf<Ex3>().toEqualTypeOf<Record<symbol, any>>()
  })

  it('should create an object with keys of type A and values of type B', () => {
    type Ex1 = AnyObject<'hello', boolean>
    type Ex2 = AnyObject<'a' | 'b', boolean>
    type Ex3 = AnyObject<'a' | 'b', string>

    expectTypeOf<Ex1>().toEqualTypeOf<{ hello: boolean }>()
    expectTypeOf<Ex2>().toEqualTypeOf<{ a: boolean; b: boolean }>()
    expectTypeOf<Ex3>().toEqualTypeOf<{ a: string; b: string }>()
  })
})
