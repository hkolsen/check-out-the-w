import { useMemo } from 'react';

/**
 * Returns an object, memoized by its values.
 * The object must not change its keys or the order of its keys between calls.
 */
export function useObjectMemo<T extends {}>(object: Readonly<T>): Readonly<T> {
  return useMemo(() => object, Object.values(object));
}