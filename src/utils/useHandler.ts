import { useCallback, useRef, useState } from 'react';

type AlsoUndefined<T> = T extends void ? T : (T | undefined);

function useHandlerImmediate<TArgs extends unknown[], TResult>(
  handler: (...args: TArgs) => TResult,
): (...args: TArgs) => TResult {
  const handlerRef = useRef<(...args: TArgs) => TResult>(handler);
  handlerRef.current = handler;
  return useCallback((...args: TArgs) => {
    const currentHandler = handlerRef.current;
    return currentHandler(...args);
  }, []);
}

function useHandlerThrowInRender<TArgs extends unknown[], TResult>(
  handler: (...args: TArgs) => TResult,
): (...args: TArgs) => AlsoUndefined<TResult> {
  const handlerRef = useRef<(...args: TArgs) => TResult>(handler);
  handlerRef.current = handler;
  const [caughtError, setCaughtError] = useState(undefined);
  const callback = useCallback((...args: TArgs) => {
    const currentHandler = handlerRef.current;
    try {
      return currentHandler(...args);
    } catch (error) {
      setCaughtError(error);
      return undefined as any;
    }
  }, []);
  if (caughtError !== undefined) {
    throw caughtError;
  }
  return callback;
}

/**
 * Options for the `useHandler` hook
 */
export interface UseHandlerOptions {
  /**
   * If `true`, then if an error is thrown within the handler, it will bubble
   * up and throw at the site of invocation.
   * Otherwise, the error will be thrown on the next render
   */
  readonly throwSynchronously?: boolean;
}

/**
 * Returns a stable reference to a function that will execute the most
 * recently rendered function.
 * @param handler The function to execute
 * @param options Options about how the handler is executed.
 */
export function useHandler<TArgs extends unknown[], TResult>(
  handler: (...args: TArgs) => TResult,
  options: UseHandlerOptions & {
    /** Ensures that errors are thrown at the invocation site */
    readonly throwSynchronously: true;
  },
): (...args: TArgs) => TResult;

/**
 * Returns a stable reference to a function that will execute the most
 * recently rendered function.
 * @param handler The function to execute
 * @param options Options about how the handler is executed.
 */
export function useHandler<TArgs extends unknown[], TResult>(
  handler: (...args: TArgs) => TResult,
  options?: UseHandlerOptions,
): (...args: TArgs) => AlsoUndefined<TResult>;

export function useHandler(
  handler: (...args: any[]) => any,
  options: UseHandlerOptions = {},
) {
  const { throwSynchronously = false } = options;
  const throwSynchronouslyRef = useRef(throwSynchronously);
  if (throwSynchronouslyRef.current !== throwSynchronously) {
    throw new TypeError(
      'The value of `throwSynchronously` cannot change between calls to `useHandler`',
    );
  }
  if (throwSynchronously) {
    return useHandlerImmediate(handler);
  } else {
    return useHandlerThrowInRender(handler);
  }
}