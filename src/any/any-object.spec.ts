import { describe, it } from 'bun:test'
import type { AnyKey } from '~/any/any-key'
import type { AnyObject } from '~/any/any-object'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'

describe('AnyObject', () => {
  it('should equal Record<any, any>', () => {
    type Ex = AnyObject

    type TestEx = Expect<IsEqual<Ex, Record<AnyKey, any>>>
  })

  it('should create an object with keys of type A and values of any', () => {
    type Ex1 = AnyObject<string>
    type Ex2 = AnyObject<number>
    type Ex3 = AnyObject<symbol>

    type TestEx1 = Expect<IsEqual<Ex1, Record<string, any>>>
    type TestEx2 = Expect<IsEqual<Ex2, Record<number, any>>>
    type TestEx3 = Expect<IsEqual<Ex3, Record<symbol, any>>>
  })

  it('should create an object with keys of type A and values of type B', () => {
    type Ex1 = AnyObject<'hello', boolean>
    type Ex2 = AnyObject<'a' | 'b', boolean>
    type Ex3 = AnyObject<'a' | 'b', string>

    type TestEx1 = Expect<IsEqual<Ex1, { hello: boolean }>>
    type TestEx2 = Expect<IsEqual<Ex2, { a: boolean; b: boolean }>>
    type TestEx3 = Expect<IsEqual<Ex3, { a: string; b: string }>>
  })
})
