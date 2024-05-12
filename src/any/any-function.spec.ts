import { describe, expectTypeOf, it } from 'vitest'
import type { AnyFunction } from '~/any/any-function'

describe('AnyFunction', () => {
  it('should equal (...args: any[]) => any', () => {
    expectTypeOf<AnyFunction>().toEqualTypeOf<(...args: any[]) => any>()
  })

  it('should create a function type with A as parameters', () => {
    type Ex1 = AnyFunction<number[]>
    type Ex2 = AnyFunction<string[]>
    type Ex3 = AnyFunction<boolean[]>
    type Ex4 = AnyFunction<[number, string, boolean]>

    expectTypeOf<Ex1>().toEqualTypeOf<(...args: number[]) => any>()
    expectTypeOf<Ex2>().toEqualTypeOf<(...args: string[]) => any>()
    expectTypeOf<Ex3>().toEqualTypeOf<(...args: boolean[]) => any>()
    expectTypeOf<Ex4>().toEqualTypeOf<
      (...args: [number, string, boolean]) => any
    >()
  })

  it('should create a function type with A as parameters and B as return type', () => {
    type Ex1 = AnyFunction<number[], string>
    type Ex2 = AnyFunction<string[], number>
    type Ex3 = AnyFunction<boolean[], boolean>
    type Ex4 = AnyFunction<[number, string, boolean], string>

    expectTypeOf<Ex1>().toEqualTypeOf<(...args: number[]) => string>()
    expectTypeOf<Ex2>().toEqualTypeOf<(...args: string[]) => number>()
    expectTypeOf<Ex3>().toEqualTypeOf<(...args: boolean[]) => boolean>()
    expectTypeOf<Ex4>().toEqualTypeOf<
      (...args: [number, string, boolean]) => string
    >()
  })
})
