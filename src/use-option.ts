import { useState } from 'react';
import { bind, option, pipe } from 'tiinvo';
import { UseValueFns } from './use-value';

export interface UseOption<T> extends UseValueFns<T | null | undefined> {
  none: boolean;
  some: boolean;
  unsafe: T;
  value: option.Option<T>;
}

/**
 * Accepts an `Option<T>`. 
 * 
 * @since 1.0.0
 * @example
 * ```tsx
 * import * as React from 'react';
 * import { useOption, option } from 'use-primitives';
 * 
 * export interface MyComponentProps {
 *    value: option.Option<number>;
 * }
 * 
 * export const MyComponent: React.FC = (props) => {
 *    const optnumber = useOption(props.value);
 * 
 *    return (
 *      <div>
 *        you passed { optnumber.some ? optnumber.unsafe : `nothing` }
 *      </div>
 *    )
 * }
 * 
 * export const MyOtherComponent = () => {
 *    return (
 *      <>
 *        <MyComponent value={option.some(10)} />
 *        <MyComponent value={option.none()} />
 *      </>
 *    )
 * }
 * ```
 * 
 * @template T 
 * @param opt 
 * @returns 
 */
export const useOption = <T>(opt: option.Option<T>): UseOption<T> => {
  const [value, setunderlyingvalue] = useState(opt);
  const some = option.isSome(value);
  const none = option.isNone(value);
  const set = pipe(option.option as any, setunderlyingvalue);
  const reset = bind(setunderlyingvalue, opt);
  const unsafe = option.unwrapOr(undefined as unknown as T)(value);

  return { unsafe, value, set, reset, some, none };
}
