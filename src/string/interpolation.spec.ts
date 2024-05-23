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

  it('should interpolate a number', () => {
    type Ex1 = Interpolation<'{{a}}', { a: 1 }>
    type Ex2 = Interpolation<'{{a}} {{b}}', { a: 1; b: 2 }>

    type TestEx1 = Expect<IsEqual<Ex1, '1'>>
    type TestEx2 = Expect<IsEqual<Ex2, '1 2'>>
  })

  it('should interpolate a bigint', () => {
    type Ex1 = Interpolation<'{{a}}', { a: 1n }>
    type Ex2 = Interpolation<'{{a}} {{b}}', { a: 1n; b: 2n }>

    type TestEx1 = Expect<IsEqual<Ex1, '1'>>
    type TestEx2 = Expect<IsEqual<Ex2, '1 2'>>
  })

  it('should interpolate a boolean', () => {
    type Ex1 = Interpolation<'{{a}}', { a: true }>
    type Ex2 = Interpolation<'{{a}} {{b}}', { a: true; b: false }>

    type TestEx1 = Expect<IsEqual<Ex1, 'true'>>
    type TestEx2 = Expect<IsEqual<Ex2, 'true false'>>
  })
})
