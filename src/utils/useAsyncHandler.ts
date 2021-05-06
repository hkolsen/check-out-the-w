import { Reducer, useCallback, useEffect, useReducer, useRef } from 'react';
import { useTupleMemo } from './useTupleMemo';
import { useObjectMemo } from './useObjectMemo';
import { asError } from './asError';

export interface UseAsyncHandlerOptions {
  /**
   * When `true`, `error` will be included within the return value.
   * Otherwise, the error will be thrown in the next render.
   */
  readonly includeErrorInUtils?: boolean;
  /**
   * If `false`, then current async execution will not be cancelled on unmount
   * Otherwise, it will be cancelled when the component is unmounted.
   */
  readonly cancelOnUnmount?: boolean;
}

export interface UseAsyncHandlerUtils<TResult> {
  /**
   * Whether the function is actively executing
   */
  readonly loading: boolean;
  /**
   * Whether the function has completed executing (either successfully or unsuccessfully).
   * Will be `false` if the function has not been called.
   */
  readonly completed: boolean;
  /**
   * The most-recent result of the async handler
   */
  readonly result: TResult | undefined;
  /**
   * Cancel the currently-executing async handler.
   * If `loading` is `false`, this has no effect.
   */
  readonly cancel: () => void;
  /**
   * Sets the current `error` to `undefined`
   */
  readonly clearError: () => void;
}

export interface UseAsyncHandlerUtilsWithError<TResult>
  extends UseAsyncHandlerUtils<TResult> {
  /**
   * The most-recent error of the async handler
   */
  readonly error: Error | undefined;
}

export interface UseAsyncHandlerExecutionUtils {
  /**
   * Returns whether the current execution of the async handler has been
   * cancelled.
   */
  readonly isCancelled: () => boolean;
}

enum ActionType {
  Cancel = 1,
  Fulfilled,
  Start,
  Rejected,
  ClearError,
}
interface StartAction {
  type: ActionType.Start;
}
interface CancelAction {
  type: ActionType.Cancel;
}
interface FulfilledAction<TResult> {
  type: ActionType.Fulfilled;
  value: TResult;
}
interface RejectedAction {
  type: ActionType.Rejected;
  error: Error;
}
interface ClearErrorAction {
  type: ActionType.ClearError;
}
type Action =
  | StartAction
  | CancelAction
  | FulfilledAction<any>
  | RejectedAction
  | ClearErrorAction;
interface State<TResult> {
  loading: boolean;
  completed: boolean;
  result: TResult | undefined;
  error: Error | undefined;
}
function reducer<TResult>(
  state: State<TResult>,
  action: Action,
): State<TResult> {
  switch (action.type) {
    case ActionType.Start:
      return {
        ...state,
        loading: true,
        completed: false,
        result: undefined,
        error: undefined,
      };
    case ActionType.Cancel:
      return {
        ...state,
        loading: false,
        completed: false,
      };
    case ActionType.Fulfilled:
      return {
        ...state,
        loading: false,
        completed: true,
        result: action.value,
      };
    case ActionType.Rejected:
      return {
        ...state,
        loading: false,
        completed: true,
        error: action.error,
      };
    case ActionType.ClearError:
      return {
        ...state,
        error: undefined,
      };
  }
}

const INITIAL_STATE: State<any> = {
  loading: false,
  completed: false,
  result: undefined,
  error: undefined,
};

/**
 * Returns a function and a set of utilities to execute a promise-returning
 * async function.
 *
 * It is assumed that this will be called arbitrarily within the component's
 * mounted lifecycle.
 *
 * If the handler is being actively executed and another request is made,
 * the previous request will be cancelled.
 *
 * The handler may or may not receive arguments, based on how it is expected
 * to be called. It has access to its outer scope, so state or props should
 * be read directly from the binding if before any `await`. If after an
 * `await`, `useAutoRef` can be used to get the most-recent value, otherwise
 * the values will be "frozen" at time of invocation.
 *
 * @param asyncHandler A function that is passed a set of utilities about the
 *                     current execution, particularly around cancellation.
 * @param options Options about how the async handler is executed.
 * @example
 *  const [run, { loading, completed, result, error, cancel }] = useAsyncHandler(
 *    ({ isCancelled, signal }) => async (x: number, y: number) => {
 *      await delay(x * y, { signal });
 *      if (isCancelled()) {
 *        return 0;
 *      }
 *      return x + y;
 *    }
 *  );
 */
export function useAsyncHandler<TArgs extends unknown[], TResult>(
  asyncHandler: (
    utils: UseAsyncHandlerExecutionUtils,
  ) => (...args: TArgs) => Promise<TResult>,
  options: UseAsyncHandlerOptions & {
    /**
     * When `true`, `error` will be included within the return value.
     * Otherwise, the error will be thrown in the next render.
     */
    readonly includeErrorInUtils: true;
  },
): readonly [(...args: TArgs) => void, UseAsyncHandlerUtilsWithError<TResult>];
export function useAsyncHandler<TArgs extends unknown[], TResult>(
  asyncHandler: (
    utils: UseAsyncHandlerExecutionUtils,
  ) => (...args: TArgs) => Promise<TResult>,
  options?: Omit<UseAsyncHandlerOptions, 'includeErrorInUtils'>,
): readonly [(...args: TArgs) => void, UseAsyncHandlerUtils<TResult>];
export function useAsyncHandler<TArgs extends unknown[], TResult>(
  asyncHandler: (
    utils: UseAsyncHandlerExecutionUtils,
  ) => (...args: TArgs) => Promise<TResult>,
  options: UseAsyncHandlerOptions = {},
) {
  const { includeErrorInUtils = false, cancelOnUnmount = true } = options;
  const includeErrorInUtilsRef = useRef(includeErrorInUtils);
  if (includeErrorInUtilsRef.current !== includeErrorInUtils) {
    throw new TypeError(
      'The value of `includeErrorInUtils` cannot change between calls to `useAsyncHandler`',
    );
  }
  const cancelOnUnmountRef = useRef(cancelOnUnmount);
  if (cancelOnUnmountRef.current !== cancelOnUnmount) {
    throw new TypeError(
      'The value of `cancelOnUnmount` cannot change between calls to `useAsyncHandler`',
    );
  }

  const asyncHandlerRef = useRef<
    (
      utils: UseAsyncHandlerExecutionUtils,
    ) => (...args: TArgs) => Promise<TResult>
  >(asyncHandler);
  asyncHandlerRef.current = asyncHandler;
  const [{ loading, result, error, completed }, dispatch] = useReducer<
    Reducer<State<TResult>, Action>
  >(reducer, INITIAL_STATE);
  const operationRef = useRef<unknown | null>(null);
  const cancel = useCallback(() => {
    if (operationRef.current) {
      operationRef.current = null;
      dispatch({ type: ActionType.Cancel });
    }
  }, []);
  const clearError = useCallback(() => {
    dispatch({ type: ActionType.ClearError });
  }, []);
  useEffect(() => {
    if (cancelOnUnmount) {
      cancel();
    }
  }, [cancel, cancelOnUnmount]);
  const run = useCallback(
    (...args: TArgs) => {
      cancel();
      dispatch({ type: ActionType.Start });
      const operation = {} as unknown;
      operationRef.current = operation;
      function isCancelled() {
        return operationRef.current !== operation;
      }
      const promise = new Promise((resolve) => {
        const currentAsyncHandler = asyncHandlerRef.current;
        const asyncFn = currentAsyncHandler({
          isCancelled,
        });
        return resolve(asyncFn(...args));
      });
      promise.then(
        (value) => {
          if (!isCancelled()) {
            operationRef.current = null;
            dispatch({ type: ActionType.Fulfilled, value });
          }
        },
        (newError) => {
          if (!isCancelled()) {
            operationRef.current = null;
            dispatch({ type: ActionType.Rejected, error: asError(newError) });
          }
        },
      );
    },
    [cancel],
  );
  const hookResult = useTupleMemo([
    run,
    useObjectMemo<
      UseAsyncHandlerUtils<TResult> | UseAsyncHandlerUtilsWithError<TResult>
    >(
      includeErrorInUtils
        ? ({
            loading,
            completed,
            result,
            error,
            cancel,
            clearError,
          } as const)
        : ({
            loading,
            completed,
            result,
            cancel,
            clearError,
          } as const),
    ),
  ] as const);
  if (!includeErrorInUtils && error) {
    throw error;
  } else {
    return hookResult;
  }
}