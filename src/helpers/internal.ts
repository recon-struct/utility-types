/**
 * # 🚫 DO NOT EXPORT
 * A unique symbol, used for marking internal interfaces.
 * @internal
 */
const INTERNAL = Symbol()

/**
 * # 🚫 DO NOT EXPORT FROM src/index.ts
 * Generates an internal interface. That is, an interface which is impossible to
 * construct in user code that consumes this library. The reason for producing
 * such an interface is to conceal some implementation details of internal types
 * (most often variables used in recursive types).
 * @internal
 */
export interface Internal {
  [INTERNAL]: typeof INTERNAL
}
