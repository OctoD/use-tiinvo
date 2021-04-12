import { renderHook } from '@testing-library/react-hooks'
import { act } from 'react-test-renderer';
import { option } from 'tiinvo'
import { useOption } from '../use-option'

test(`useOption some/none`, () => {
  const test0 = renderHook(() => useOption(option.some(10)));
  const test1 = renderHook(() => useOption(option.none()));

  expect(test0.result.current.none).toBeFalsy();
  expect(test0.result.current.some).toBeTruthy();
  expect(test1.result.current.some).toBeFalsy();
  expect(test1.result.current.none).toBeTruthy();

  act(() => test0.result.current.set(20));

  expect(test0.result.current.some).toBeTruthy();
  
  act(() => test0.result.current.set(undefined));
  expect(test0.result.current.none).toBeTruthy();
  act(() => test0.result.current.set(null));
  expect(test0.result.current.none).toBeTruthy();
  act(() => test0.result.current.set(2));
  expect(test0.result.current.none).toBeFalsy();
  expect(test0.result.current.some).toBeTruthy();

  expect(test0.result.current.unsafe).toBe(2);
});
