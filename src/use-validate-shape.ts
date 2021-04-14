import { useEffect } from 'react';
import { fifn, obj } from 'tiinvo';
import { useBool } from './use-bool';
import { UseValidate, UseValidateHook } from './use-validate';

export type ValidateShapeHook<T extends any> = {
  [key in keyof T]: T[key] extends UseValidateHook<infer U, infer K> ? UseValidateHook<U, K> : never;
}

export type ValidateShape<T extends ValidateShapeHook<any>> = {
  [key in keyof T]: T[key] extends UseValidateHook<infer U, infer K> ? UseValidate<U, K> : never;
};

export interface UseValidateShape<T extends ValidateShapeHook<any>> {
  /**
   * The shape you passed.
   * @since 1.0.0
   */
  shape: ValidateShape<T>;
  /**
   * Current shape value
   */
  value: UseValidateValue<T>;
  /**
   * True if the shape is valid, otherwise false
   * @since 1.0.0
   */
  valid: boolean;
}

export type UseValidateValue<T extends { [index: string]: UseValidateHook<any, any>; }> = { [key in keyof T]: T[key] extends UseValidateHook<infer U, any> ? U : never; };

/**
 * Given a shape of `UseValidate<any, K>` hooks, it validates it each time it mutates.
 * @since 1.0.0
 * @example
 * ```tsx
 * import * as React from 'react';
 * import { useValidateShape, usePredicate, useValidate, isnumber, isstring, pipe, predicate, num, str } from 'use-primitives';
 * 
 * const requiredstr = pipe(
 *    str.trim,
 *    str.length,
 *    num.greaterequalthan(2),
 * );
 * 
 * const useIsAdult = usePredicate(predicate.and(isnumber, num.greaterequalthan(18)));
 * const useIsValidName = usePredicate(predicate.and(isstring, requiredstr));
 * 
 * const shape = {
 *    age: useValidate(useIsAdult, `you must be adult to have your own bank account`),
 *    firstname: useValidate(useIsValidName, `First name is required`),
 *    lastname: useValidate(useIsValidName, `Last name is required`),
 * };
 * 
 * const mapeventvalue = (event: React.ChangeEvent<HTMLInputElement>) => event.target.value;
 * 
 * export const MySubscriptionForm = () => {
 *    const form = useValidateShape(shape);
 * 
 *    return (
 *      <section>
 *        <label>
 *          First name
 *          <input onChange={pipe(mapeventvalue, form.shape.firstname.set)} value={form.shape.firstname.value} type="text" />
 *          <small>{form.shape.firstname.message}</small>
 *        </label>
 *        <label>
 *          Last name
 *          <input onChange={pipe(mapeventvalue, form.shape.lastname.set)} value={form.shape.lastname.value} type="text" />
 *          <small>{form.shape.lastname.message}</small>
 *        </label>
 *        <label>
 *          Confirm your Age
 *          <input onChange={pipe(mapeventvalue, form.shape.age.set)} value={form.shape.age.value} type="number" />
 *          <small>{form.shape.age.message}</small>
 *        </label>
 *        <button disabled={!form.valid}>
 *          Subscribe
 *        </button>
 *      </section>
 *    );
 * }
 * 
 * ```
 * 
 * @param shape 
 * @returns 
 */
export const useValidateShape = <T extends { [index: string]: UseValidateHook<any, any> }>(shape: T) => {
  const useinitialhook = (values: UseValidateValue<T>) => {
    let validator: any = {};
    const k = obj.keys(shape);

    for (let i = 0; i < k.length; i++) {
      validator[k[i]] = shape[k[i]](values[k[i]]);
    }

    return validator;
  }

  return (values: UseValidateValue<T>): UseValidateShape<T> => {
    const keys = obj.keys(shape);
    const validation = useBool();
    let validator = useinitialhook(values);

    useEffect(() => {
      let error = false;

      for (let i = 0; i < keys.length; i++) {
        if (!validator[keys[i]].valid) {
          error = true;
        }
      }

      fifn(error, validation.setfalse, validation.settrue);
    }, [validator]);

    return {
      valid: validation.value,
      value: new Proxy(validator, {
        get: (target, property) => target[property].value,
      }),
      shape: validator,
    }
  }
}
  