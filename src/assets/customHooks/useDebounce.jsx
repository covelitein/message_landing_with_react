import { useEffect, useRef } from "react";

function useDebounce(callback, delay) {
  const timerRef = useRef(null);

  useEffect(() => {
    // Clear the timer if the component is unmounted or the delay changes
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [delay]);

  function debouncedCallback(...args) {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  }

  return debouncedCallback;
}

export default useDebounce;
