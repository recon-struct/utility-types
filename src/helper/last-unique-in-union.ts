import type { InnerWrapMap } from '~/helper/inner-wrap-map'
import type { OuterWrapMap } from '~/helper/outer-wrap-map'

/**
 * Extracts the last unique type from a union type.
 * @typeParam A - The union type from which to extract the last unique type.
 * @group Helper
 */
export type LastUniqueInUnion<A> =
  (
    OuterWrapMap<InnerWrapMap<A>> extends OuterWrapMap<infer B> ? B : never
  ) extends InnerWrapMap<infer B>
    ? B
    : never
