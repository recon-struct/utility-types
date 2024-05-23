import { describe, it } from 'bun:test'
import type { IsFalsy } from '~/any/antecedent/is-falsy'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'

describe('IsFalsy', () => {
  it('should return true if A extends falsy', () => {
    type Ex1 = IsFalsy<null>
    type Ex2 = IsFalsy<undefined>
    type Ex3 = IsFalsy<false>
    type Ex4 = IsFalsy<0>
    type Ex5 = IsFalsy<''>
    type Ex6 = IsFalsy<0n>

    type TestEx1 = Expect<IsEqual<Ex1, true>>
    type TestEx2 = Expect<IsEqual<Ex2, true>>
    type TestEx3 = Expect<IsEqual<Ex3, true>>
    type TestEx4 = Expect<IsEqual<Ex4, true>>
    type TestEx5 = Expect<IsEqual<Ex5, true>>
    type TestEx6 = Expect<IsEqual<Ex6, true>>
  })

  it('should return false if A does not extend falsy', () => {
    type Ex1 = IsFalsy<true>
    type Ex2 = IsFalsy<1>
    type Ex3 = IsFalsy<'hello'>
    type Ex4 = IsFalsy<{}>
    type Ex5 = IsFalsy<[]>

    type TestEx1 = Expect<IsEqual<Ex1, false>>
    type TestEx2 = Expect<IsEqual<Ex2, false>>
    type TestEx3 = Expect<IsEqual<Ex3, false>>
    type TestEx4 = Expect<IsEqual<Ex4, false>>
    type TestEx5 = Expect<IsEqual<Ex5, false>>
  })

  it('should return false if A extends NaN (number) a deviation from JS', () => {
    type Ex1 = IsFalsy<typeof NaN>

    type TestEx1 = Expect<IsEqual<Ex1, false>>
  })

  it('should return boolean if A is a union that extends falsy', () => {
    type Ex1 = IsFalsy<null | 1>
    type Ex2 = IsFalsy<false | []>
    type Ex3 = IsFalsy<'hello' | 0n>

    type TestEx1 = Expect<IsEqual<Ex1, boolean>>
    type TestEx2 = Expect<IsEqual<Ex2, boolean>>
    type TestEx3 = Expect<IsEqual<Ex3, boolean>>
  })
})
