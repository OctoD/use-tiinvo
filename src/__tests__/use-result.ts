import { renderHook } from '@testing-library/react-hooks'
import { act } from 'react-test-renderer';
import { result } from 'tiinvo'
import { useResult } from '../use-result'

test(`useResult`, () => {
  const test0 = renderHook(() => useResult(result.ok(10)));
  const test1 = renderHook(() => useResult(result.err(``)));

  expect(test0.result.current.err).toBeFalsy();
  expect(test0.result.current.ok).toBeTruthy();
  expect(test1.result.current.ok).toBeFalsy();
  expect(test1.result.current.err).toBeTruthy();

  act(() => test0.result.current.set(20));

  expect(test0.result.current.ok).toBeTruthy();
  
  act(() => test0.result.current.set(new Error(`err`)));
  expect(test0.result.current.err).toBeTruthy();
  act(() => test0.result.current.set(2));
  expect(test0.result.current.err).toBeFalsy();
  expect(test0.result.current.ok).toBeTruthy();

  expect(test0.result.current.unsafe).toBe(2);
});
