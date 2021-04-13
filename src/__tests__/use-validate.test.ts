import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-test-renderer';
import { useStr } from '../use-str';
import { useValidate } from '../use-validate';

test(`useValidate`, () => {
  const errmessage = 'not a string';
  const useValidateStr = useValidate(useStr, errmessage);
  const { result } = renderHook(() => useValidateStr('hello'));

  expect(result.current.message).toBeUndefined();
  expect(result.current.valid).toBeTruthy();

  act(() => result.current.set(100 as any));

  expect(result.current.message).toBe(errmessage);
  expect(result.current.valid).toBeFalsy();
});
