import { useRef, useEffect } from "react";

const useDebounce = () => {
  const timeout = useRef();

  const debounce =
    (func: Function, wait: number) =>
    (...args: any) => {
      clearTimeout(timeout.current);
      //@ts-ignore
      timeout.current = setTimeout(() => func(...args), wait);
    };

  const debounceAsync =
    (func: Function, wait: number) =>
    (...args: any) => {
      return new Promise((resolve, reject) => {
        clearTimeout(timeout.current);
        //@ts-ignore
        timeout.current = setTimeout(async () => {
          try {
            const result = await func(...args);
            resolve(result);
          } catch (err) {
            reject(err);
          }
        }, wait);
      });
    };

  useEffect(() => {
    return () => {
      if (!timeout.current) return;
      clearTimeout(timeout.current);
    };
  }, []);

  return { debounce, debounceAsync };
};

export default useDebounce;
