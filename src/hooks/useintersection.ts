import { useEffect } from 'react';

interface Params {
  callback: () => void;
  target: Element;
  options: IntersectionObserverInit;
}

export const useIntersection = ({
  callback,
  target,
  options
}: Params) => {
  const intersectionCallBack = async ([entry], intersec: IntersectionObserver) => {
    if (entry.isIntersecting) {
      intersec.unobserve(entry.target);
      callback();
      intersec.observe(entry.target);
    }
  }

  useEffect(() => {
    let observer: IntersectionObserver;
    if (target) {
      observer = new IntersectionObserver(intersectionCallBack, options);
      observer.observe(target);
    }
  });
}
