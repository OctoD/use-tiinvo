import { isarray, isarrayof, Typeguard } from 'tiinvo';
import { UseSafe, useSafeFactory } from './use-safe';

/**
 * Similar to use-safe, but for arrays.
 * 
 * @since 1.0.0
 * @example
 * ```tsx
 * import * as React from 'react';
 * import { useArray, isstring } from 'use-primitives';
 * 
 * export interface MyComponentProps {
 *    labels: string | string[];
 * }
 * 
 * export const MyComponent: React.FC<MyComponentProps> = ({
 *    labels,
 * }) => {
 *    const arr = useArray(labels);
 * 
 *    return (
 *      <div>
 *        {
 *          arr.valid && arr.map((arg, index) => <p key={index}>{arg.toUpperCase()}</p>)
 *        }
 *        {
 *          isstring(arr.value) && <p>{arr.toUpperCase()}</p>
 *        }
 *      </div>
 *    )
 * }
 * ```
 */
export const useArray = useSafeFactory(isarray) as <T>(arr: T[]) => UseSafe<T[]>;

/**
 * Similar to `useArray`, but uses a typeguard to check if an array is valid or not.
 * 
 * @since 1.0.0
 * @example
 * ```tsx
 * import * as React from 'react';
 * import { useArrayOf, isstring } from 'use-primitives';
 * 
 * const useStringArray = useArrayOf(isstring);
 * 
 * export interface MyComponentProps {
 *    items: (string | number)[];
 * }
 * 
 * export const MyComponent: React.FC<MyComponentProps> = ({
 *    items,
 * }) => {
 *    const arr = useStringArray(items);
 * 
 *    if (!arr.valid) {
 *      return <>Invalid items</>
 *    }
 * 
 *    return (
 *      <>
 *        {
 *          arr.value.map((item, index) => 
 *            <p key={index}>
 *              {item.toUpperCase()}
 *            </p>
 *          )
 *        }
 *      </>
 *    )
 * }
 * ```
 * 
 * @param typeguard 
 * @returns 
 */
export const useArrayOf = <T>(typeguard: Typeguard<T>) => useSafeFactory(isarrayof(typeguard));
