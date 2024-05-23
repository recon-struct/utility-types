import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { IsFunction } from '~/function/antecedent/is-function'
import type { Expect } from '~/helper/test'

describe('IsFunction', () => {
  it('should return true if the function is a function', () => {
    type Ex1 = IsFunction<() => void>

    type TestEx1 = Expect<IsEqual<Ex1, true>>
  })

  it('should return false if the function is not a function', () => {
    type Ex1 = IsFunction<1>
    type Ex2 = IsFunction<true>
    type Ex3 = IsFunction<'hello'>
    type Ex4 = IsFunction<{}>
    type Ex5 = IsFunction<undefined>
    type Ex6 = IsFunction<null>
    type Ex7 = IsFunction<bigint>
    type Ex8 = IsFunction<symbol>
    type Ex9 = IsFunction<[]>
    type Ex10 = IsFunction<Set<any>>
    type Ex11 = IsFunction<new () => void>

    type TestEx1 = Expect<IsEqual<Ex1, false>>
    type TestEx2 = Expect<IsEqual<Ex2, false>>
    type TestEx3 = Expect<IsEqual<Ex3, false>>
    type TestEx4 = Expect<IsEqual<Ex4, false>>
    type TestEx5 = Expect<IsEqual<Ex5, false>>
    type TestEx6 = Expect<IsEqual<Ex6, false>>
    type TestEx7 = Expect<IsEqual<Ex7, false>>
    type TestEx8 = Expect<IsEqual<Ex8, false>>
    type TestEx9 = Expect<IsEqual<Ex9, false>>
    type TestEx10 = Expect<IsEqual<Ex10, false>>
    type TestEx11 = Expect<IsEqual<Ex11, false>>
  })
})
