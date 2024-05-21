import { describe, expectTypeOf, it } from 'vitest'
import type { GetPaths } from '~/object/get-paths'

describe('GetPaths', () => {
  it('should return the paths of nested properties', () => {
    type Ex1 = GetPaths<{ a: { b: 'c' } }> // ['a', 'b']
    type Ex2 = GetPaths<{ a: { b: 'c' }; d: 'e' }> // ['a', 'b'] | ['d']

    expectTypeOf<Ex1>().toEqualTypeOf<['a', 'b']>()
    expectTypeOf<Ex2>().toEqualTypeOf<['a', 'b'] | ['d']>()
  })
})
