import { describe, it } from 'bun:test'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Constructor } from '~/function/constructor'
import type { Expect } from '~/helper/test'

describe('Constructor', () => {
  it('should be a function with 1 argument', () => {
    type Ex = Constructor

    type TestEx = Expect<IsEqual<Ex, { new (...a: any[]): any }>>
  })

  it('should take parameters', () => {
    type A = [number, number, number]
    type Ex = Constructor<A>

    type TestEx = Expect<
      IsEqual<Ex, { new (a: number, b: number, c: number): any }>
    >
  })

  it('should take parameters', () => {
    type A = [number, number, number]
    type Ex = Constructor<A>

    type TestEx = Expect<IsEqual<Ex, { new (..._: A): any }>>
  })

  it('should take return type', () => {
    type A = { value: string }
    type Ex = Constructor<any[], A>

    type TestEx = Expect<IsEqual<Ex, { new (..._: any[]): A }>>
  })
})
