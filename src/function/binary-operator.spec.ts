import { describe, expectTypeOf, it } from 'vitest'
import type { BinaryOperator } from '~/function/binary-operator'

describe('BinaryOperator', () => {
  it('should be a function with 2 arguments', () => {
    expectTypeOf<BinaryOperator>().toMatchTypeOf<(a: any, b: any) => any>()
  })

  it('should return a value of type C', () => {
    type A = number
    type B = number
    type Ex = BinaryOperator<A, B>

    expectTypeOf<Ex>().toMatchTypeOf<(a1: number, a2: number) => B>()
  })
})
