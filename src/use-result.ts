import { useState } from 'react';
import { bind, result, pipe } from 'tiinvo';
import { UseValueFns } from './use-value';

export interface UseResult<T> extends UseValueFns<T | Error> {
  /**
   * True if `Result<T>` is `Ok<T>`, otherwise false.
   * @since 1.0.0
   */
  ok: boolean;
  /**
   * True if `Result<T>` is `Err`, otherwise false.
   * @since 1.0.0
   */
  err: boolean;
  /**
   * The unsafe value. It could be both `T` or `Error`, so check if `ok` before using it.
   * @since 1.0.0
   */
  unsafe: T;
  /**
   * The value as `Result<T>`
   * @since 1.0.0
   */
  value: result.Result<T>;
}

/**
 * Accepts a `Result<T>`.
 * 
 * @since 2.0.0
 * @example
 * ```tsx
 * import * as React from 'react';
 * import { bind, result, useResult, trycatchAsync } from 'use-primitives';
 * 
 * const fetchapiwillthrow = () => fetch(`pineapplepizza`).then(response => response.json());
 * const safefetch = bind(trycatchAsync, fetchapiwillthrow);
 * 
 * export const MyComponent = () => {
 *    const result = useResult(result.err(`no data`));
 * 
 *    React.useEffect(() => {
 *      if (result.err) {
 *        safefetch().then(result.set);
 *      }
 *    }, [result.err]);
 * 
 *    return (
 *      <>Api call result is: {result.err ? result.unsafe.message : result.unsafe}</>
 *    )
 * }
 * ```
 * 
 * @param opt 
 * @returns 
 */
export const useResult = <T>(opt: result.Result<T>): UseResult<T> => {
  const [value, setunderlyingvalue] = useState(opt);
  const ok = result.isOk(value);
  const err = result.isErr(value);
  const set = pipe(result.result as any, setunderlyingvalue);
  const reset = bind(setunderlyingvalue, opt);
  const unsafe = result.unwrapOr(undefined as unknown as T)(value);

  return { unsafe, value, set, reset, ok, err };
}
