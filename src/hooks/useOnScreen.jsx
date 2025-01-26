import { useEffect, useState } from "react";

const observers = new Map();

const getObserver = (options) => {
  const key = JSON.stringify(options);
  if (observers.has(key)) {
    return observers.get(key);
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const callback = observers.get(key).callbacks.get(entry.target);
      if(callback) callback(entry.isIntersecting, entry.target);
    });
  }, options);

  observers.set(key, { observer, callbacks: new Map() });

  return observers.get(key);
};

const useOnScreen = (elemRef, callback = (a, b) => {}) => {
  const [isOnScreen, setIsOnScreen] = useState(false);

  useEffect(() => {
    const { observer, callbacks } = getObserver({
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    });

    const callBackWrapper = (isIntersecting, target) => {
      if (isIntersecting) {
        setIsOnScreen(true);
        callback(true, target);
      } else {
        setIsOnScreen(false);
        callback(false, target);
      }
    };

    if (elemRef?.current) {
      callbacks.set(elemRef.current, callBackWrapper);
      observer.observe(elemRef.current);
    }

    return () => {
      if (elemRef?.current) {
        observer.unobserve(elemRef.current);
        observer.callbacks.delete(elemRef.current);
      }
    };
  }, [elemRef]);

  return isOnScreen;
};

export default useOnScreen;
