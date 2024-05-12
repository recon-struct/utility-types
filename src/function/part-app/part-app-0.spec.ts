import { describe, expectTypeOf, it } from 'vitest'
import type { PartApp0 } from '~/function/part-app/part-app-0'

describe('PartApp0', () => {
  it('should be a function with 0 arguments', () => {
    type Ex = PartApp0

    expectTypeOf<Ex>().toMatchTypeOf<() => any>()
  })

  it('should return a value of type A', () => {
    type A = 'A'
    type Ex = PartApp0<A>

    expectTypeOf<Ex>().toMatchTypeOf<() => A>()
  })
})
