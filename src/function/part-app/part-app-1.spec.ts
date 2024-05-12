import { describe, expectTypeOf, it } from 'vitest'
import type { PartApp1 } from '~/function/part-app/part-app-1'

describe('PartApp1', () => {
  it('should be a function with 1 argument', () => {
    type Ex = PartApp1

    expectTypeOf<Ex>().toMatchTypeOf<(a: any) => any>()
  })

  it('should return a value of type B', () => {
    type A = 'A'
    type B = 'B'
    type Ex = PartApp1<A, B>

    expectTypeOf<Ex>().toMatchTypeOf<(a: A) => B>()
  })
})
