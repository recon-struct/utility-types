import { describe, it } from 'bun:test'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'
import type { Interpolation } from '~/string/interpolation'

describe('Interpolation', () => {
  it('should interpolate a string', () => {
    type Ex1 = Interpolation<'hello {{world}}', { world: 'world' }>
    type Ex2 = Interpolation<'{{a}} {{b}} {{c}}', { a: 'a'; b: 'b'; c: 'c' }>

    type TestEx1 = Expect<IsEqual<Ex1, 'hello world'>>
    type TestEx2 = Expect<IsEqual<Ex2, 'a b c'>>
  })
})
