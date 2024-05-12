import { describe, expectTypeOf, it } from 'vitest'
import type { Constructor } from '~/function/constructor'

describe('Constructor', () => {
  it('should be a function with 1 argument', () => {
    type Ex = Constructor

    expectTypeOf<Ex>().toMatchTypeOf<{ new (a: any): any }>()
  })

  it('should take parameters', () => {
    type A = [number, number, number]
    type Ex = Constructor<A>

    expectTypeOf<Ex>().toEqualTypeOf<{ new (..._: A): any }>()
  })

  it('should take return type', () => {
    type A = { value: string }
    type Ex = Constructor<any[], A>

    expectTypeOf<Ex>().toEqualTypeOf<{ new (..._: any[]): A }>()
  })
})
