import type { ConsumeRight } from '~/string/consume-right'

/**
 * Type representing Parsing Expression Grammar (PEG) sequence operation.
 * @typeParam A - The first string to match.
 * @typeParam B - The second string to match.
 * @typeParam C - The sequence of strings to match.
 * @group Parsing Expression Grammars
 * @experimental
 */
export type Sequence<
  A extends string,
  B extends string,
  C extends string,
> = ConsumeRight<B, ConsumeRight<A, C>>

interface Matcher {
  length: number
}

interface Fn {
  in: string
  first: string
  second: string
  return: unknown
  matcher: Matcher
  stats: this['matcher' extends infer A extends Matcher ? A : never]
}

type Match<A extends Fn, B extends A['in']> = (A & {
  in: B
})['return']

interface MyBallsSequence extends Fn {
  first: 'my'
  second: 'balls'
  return: Sequence<this['first'], this['second'], this['in']>
}

type Test = Match<MyBallsSequence, 'myballs'>
