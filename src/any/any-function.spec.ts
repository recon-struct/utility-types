import { describe, it } from 'bun:test'
import type { AnyFunction } from '~/any/any-function'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'

describe('AnyFunction', () => {
  it('should equal (...args: any[]) => any', () => {
    type Ex = AnyFunction

    type TestEx = Expect<IsEqual<Ex, (...args: any[]) => any>>
  })

  it('should create a function type with A as parameters', () => {
    type Ex1 = AnyFunction<number[]>
    type Ex2 = AnyFunction<string[]>
    type Ex3 = AnyFunction<boolean[]>
    type Ex4 = AnyFunction<[number, string, boolean]>

    type TestEx1 = Expect<IsEqual<Ex1, (...args: number[]) => any>>
    type TestEx2 = Expect<IsEqual<Ex2, (...args: string[]) => any>>
    type TestEx3 = Expect<IsEqual<Ex3, (...args: boolean[]) => any>>
    type TestEx4 = Expect<
      IsEqual<Ex4, (...args: [number, string, boolean]) => any>
    >
  })

  it('should create a function type with A as parameters and B as return type', () => {
    type Ex1 = AnyFunction<number[], string>
    type Ex2 = AnyFunction<string[], number>
    type Ex3 = AnyFunction<boolean[], boolean>
    type Ex4 = AnyFunction<[number, string, boolean], string>

    type TestEx1 = Expect<IsEqual<Ex1, (...args: number[]) => string>>
    type TestEx2 = Expect<IsEqual<Ex2, (...args: string[]) => number>>
    type TestEx3 = Expect<IsEqual<Ex3, (...args: boolean[]) => boolean>>
    type TestEx4 = Expect<
      IsEqual<Ex4, (...args: [number, string, boolean]) => string>
    >
  })
})
