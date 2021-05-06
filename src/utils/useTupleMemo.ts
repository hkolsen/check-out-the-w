import { useMemo } from 'react';

/**
 * Returns a tuple, memoized by its elements.
 * The tuple must not change length between calls.
 */
export function useTupleMemo<T extends readonly unknown[]>(tuple: T): T {
  return useMemo(() => tuple, tuple);
}