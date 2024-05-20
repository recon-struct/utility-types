import type { Unshift } from '~/tuple/unshift'
import { describe, expectTypeOf, it } from 'vitest'

describe('Unshift', () => {
  it('should add an element to the beginning of `A`', () => {
    type Ex1 = Unshift<['b', 'c'], 'a'> // ['a', 'b', 'c']
    expectTypeOf<Ex1>().toEqualTypeOf<['a', 'b', 'c']>()
  })
})