import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-test-renderer';
import { isnumber } from 'tiinvo';
import { useArray, useArrayOf } from '../use-array';

test(`useArray`, () => {
  const { result } = renderHook(() => useArray([1, 2, 3]));

  expect(result.current.valid).toBeTruthy();

  act(()=> result.current.set(123 as any));

  expect(result.current.valid).toBeFalsy();
});

test(`useArrayOf`, () => {
  const { result } = renderHook(() => useArrayOf(isnumber)([1, 2, 3]));

  expect(result.current.valid).toBeTruthy();

  act(()=> result.current.set(123 as any));

  expect(result.current.valid).toBeFalsy();
});
