import { describe, expectTypeOf, it } from 'vitest'
import type { ConstructorReturnType } from '~/function/constructor-return-type'

describe('ConstructorReturnType', () => {
  it('should return the type of the constructor', () => {
    class Test {
      constructor(public value: string) {}
    }

    expectTypeOf<ConstructorReturnType<typeof Test>>().toEqualTypeOf<{
      value: string
    }>()
  })
})
