import type { InnerWrapMap } from './inner-wrap-map'
import type { OuterWrapMap } from './outer-wrap-map'

/**
 * Extracts the last unique type from a union type.
 * @typeParam A - The union type from which to extract the last unique type.
 * @internal
 */
export type LastUniqueInUnion<A> =
  (
    OuterWrapMap<InnerWrapMap<A>> extends OuterWrapMap<infer B> ? B : never
  ) extends InnerWrapMap<infer B>
    ? B
    : never
