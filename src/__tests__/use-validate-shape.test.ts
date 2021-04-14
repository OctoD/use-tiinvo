import { act, renderHook } from '@testing-library/react-hooks';
import { isnumber, isstring, pipe, predicate, num, str } from 'tiinvo';
import { usePredicate } from '../use-predicate';
import { useValidate } from '../use-validate';
import { useValidateShape } from '../use-validate-shape';

const requiredstr = pipe(
   str.trim,
   str.length,
   num.greaterequalthan(2),
);

const useIsAdult = usePredicate(predicate.and(isnumber, num.greaterequalthan(18)));
const useIsValidName = usePredicate(predicate.and(isstring, requiredstr));

const shape = {
   age: useValidate(useIsAdult, `you must be adult to have your own bank account`),
   firstname: useValidate(useIsValidName, `First name is required`),
   lastname: useValidate(useIsValidName, `Last name is required`),
};

test(`useValidateShape`, () => {
  const { result } = renderHook(() => useValidateShape(shape)({ age: 16, firstname: ``, lastname: `` }));

  expect(result.current.valid).toBeFalsy();
  expect(result.current.shape.firstname.valid).toBeFalsy();
  expect(result.current.shape.lastname.valid).toBeFalsy();
  expect(result.current.shape.age.valid).toBeFalsy();

  act(() => result.current.shape.age.set(18));

  expect(result.current.valid).toBeFalsy();
  expect(result.current.shape.firstname.valid).toBeFalsy();
  expect(result.current.shape.lastname.valid).toBeFalsy();
  expect(result.current.shape.age.valid).toBeTruthy();

  act(() => result.current.shape.firstname.set(`hello`));

  expect(result.current.valid).toBeFalsy();
  expect(result.current.shape.firstname.valid).toBeTruthy();
  expect(result.current.shape.lastname.valid).toBeFalsy();
  expect(result.current.shape.age.valid).toBeTruthy();

  act(() => result.current.shape.lastname.set(`world`));

  expect(result.current.valid).toBeTruthy();
  expect(result.current.shape.firstname.valid).toBeTruthy();
  expect(result.current.shape.lastname.valid).toBeTruthy();
  expect(result.current.shape.age.valid).toBeTruthy();

  expect(result.current.value.age).toBe(18)
  expect(result.current.value.firstname).toBe(`hello`)
  expect(result.current.value.lastname).toBe(`world`)
});
