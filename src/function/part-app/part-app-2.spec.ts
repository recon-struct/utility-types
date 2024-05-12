import { describe, expectTypeOf, it } from 'vitest'
import type { PartApp2 } from '~/function/part-app/part-app-2'

describe('PartApp2', () => {
  it('should be a function with 2 arguments', () => {
    type Ex = PartApp2

    expectTypeOf<Ex>().toMatchTypeOf<(a: any, b: any) => any>()
    expectTypeOf<Ex>().toMatchTypeOf<(a: any) => (b: any) => any>()
  })

  it('should return a value of type C', () => {
    type A = 'A'
    type B = 'B'
    type C = 'C'
    type Ex = PartApp2<A, B, C>

    expectTypeOf<Ex>().toMatchTypeOf<(a: A, b: B) => C>()
    expectTypeOf<Ex>().toMatchTypeOf<(a: A) => (b: B) => C>()
  })
})
