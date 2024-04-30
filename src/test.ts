import type { Slice } from './tuple/slice'

type ProgrammingHeroes = [
  'Mike Bostock',
  'Mr. Doob',
  'Why The Lucky Stiff (_why)',
  'John Resig',
  'David Walsh',
  'John Carmack',
  'Linus Torvalds',
  'Frank Deremer',
  'Donald Knuth',
  'Grace Hopper',
  'Noam Chomsky',
  'Alan Turing',
  'Alonzo Church',
  'Ludwig Wittgenstein',
  'Ada Lovelace',
]

export type Ex1 = Slice<ProgrammingHeroes, 0>
export type Ex2 = Slice<ProgrammingHeroes, 2, 5>
export type Ex3 = Slice<ProgrammingHeroes, 7, -3>
export type Ex4 = Slice<ProgrammingHeroes, -3, -1>
export type Ex5 = Slice<ProgrammingHeroes, 10, -1>
