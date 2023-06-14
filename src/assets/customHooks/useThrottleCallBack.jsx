import { useCallback, useEffect, useRef } from "react";
import { throttle } from "../utils/functions";

const useThrottleCallback = (callback, delay = 1000, dep = null) => {
  const callbackRef = useRef(callback);
  const throttledCallback = useRef(throttle(callbackRef.current, delay));

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    return () => {
      throttledCallback.current = null;
    };
  }, []);

  const memoizedCallback = useCallback((...args) => {
    throttledCallback.current(...args);
  }, []);

  return memoizedCallback;
};

export default useThrottleCallback;
