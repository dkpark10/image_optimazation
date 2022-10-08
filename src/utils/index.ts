export const debounce = (callback: (args?: any) => void, delay: number) => {
  let timer: NodeJS.Timer | undefined = undefined;
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(args);
    }, delay);
  };
};

export const throttle = (callback: (args?: any) => void, delay: number) => {
  let waiting = false;
  return (...args: any) => {
    if (!waiting) {
      callback(args);
      waiting = true;
      setTimeout(() => {
        waiting = false;
      }, delay);
    }
  };
};
