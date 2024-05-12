import type { HelperInnerWrapMap } from '~/helper/inner-wrap-map'
import type { HelperOuterWrapMap } from '~/helper/outer-wrap-map'

/**
 * Extracts the last unique type from a union type.
 * @typeParam A - The union type from which to extract the last unique type.
 */
export type HelperLastUniqueInUnion<A> =
  (
    HelperOuterWrapMap<HelperInnerWrapMap<A>> extends HelperOuterWrapMap<
      infer B
    >
      ? B
      : never
  ) extends HelperInnerWrapMap<infer B>
    ? B
    : never
