import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/expect'
import type { IsSnakeCase } from '~/string/antecedent/is-snake-case'

describe('IsSnakeCase', () => {
  it('should be true if `A` is snake_case', () => {
    type Ex1 = IsSnakeCase<'hello'>
    type Ex2 = IsSnakeCase<'hello_world'>
    type Ex3 = IsSnakeCase<'hello_123'>
    type Ex4 = IsSnakeCase<'hello_world_123'>

    type TestEx1 = Expect<IsEqual<Ex1, true>>
    type TestEx2 = Expect<IsEqual<Ex2, true>>
    type TestEx3 = Expect<IsEqual<Ex3, true>>
    type TestEx4 = Expect<IsEqual<Ex4, true>>
  })

  it('should be false if `A` is not snake_case', () => {
    type Ex1 = IsSnakeCase<'_hello'>
    type Ex2 = IsSnakeCase<'hello_'>
    type Ex3 = IsSnakeCase<'_HELlo_world'>
    type Ex4 = IsSnakeCase<'_hello_'>

    type TestEx1 = Expect<IsEqual<Ex1, false>>
    type TestEx2 = Expect<IsEqual<Ex2, false>>
    type TestEx3 = Expect<IsEqual<Ex3, false>>
    type TestEx4 = Expect<IsEqual<Ex4, false>>
  })
})
