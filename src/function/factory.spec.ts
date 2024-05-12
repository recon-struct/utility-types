import { describe, expectTypeOf, it } from 'vitest'
import type { Factory } from '~/function/factory'

describe('Factory', () => {
  it('should work without specifying any typeParams', () => {
    type Ex = Factory

    expectTypeOf<Ex>().toMatchTypeOf<() => any>()
  })

  it('should take parameters', () => {
    type A = [number, number, number]
    type Ex = Factory<A>

    expectTypeOf<Ex>().toMatchTypeOf<(...args: A) => any>()
  })

  it('should take a return type', () => {
    type A = { value: string }
    type Ex = Factory<any[], A>

    expectTypeOf<Ex>().toMatchTypeOf<(...args: any[]) => A>()
  })
})
