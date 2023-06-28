import useDebounce from "../customHooks/useDebounce";

const wait = (waitTime)=> {
  return new Promise((resolve) => {
    setTimeout(resolve, waitTime);
  });
}

const throttle = (cb, delay = 1000)=> {
  let shouldWait = false;
  let waitingArgs;
  const timeoutFunc = () => {
    if (waitingArgs == null) {
      shouldWait = false;
    } else {
      cb(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFunc, delay);
    }
  };

  return (...args) => {
    if (shouldWait) {
      waitingArgs = args;
      return;
    }

    cb(...args);
    shouldWait = true;
    setTimeout(timeoutFunc, delay);
  };
}


const checkXAxisLessThan = (size) => {
  const message = "No window object";
  const windowElement = window || message;

  if (windowElement === message) return message;

  const resizeHandler = () => {
    if (window.innerWidth < size) {
      return true;
    } else {
      return false;
    }
  };

  windowElement.addEventListener("resize", resizeHandler);
  windowElement.addEventListener("load", resizeHandler);
};

const checkXAxisGreaterThan = (size) => {
  const message = "No window object";
  const windowElement = window || message;

  if (windowElement === message) return message;

  const resizeHandler = () => {
    if (window.innerWidth > size) {
      return true;
    } else {
      return false;
    }
  };

  windowElement.addEventListener("load", resizeHandler);
  windowElement.addEventListener("resize", resizeHandler);
};

const checkYAxisLessThan = (size) => {
  const message = "No window object";
  const windowElement = window || message;

  if (windowElement === message) return message;

  const resizeHandler = () => {
    if (window.innerHeight < size) {
      return true;
    } else {
      return false;
    }
  };

  windowElement.addEventListener("load", resizeHandler);
  windowElement.addEventListener("resize", resizeHandler);
};

const checkYAxisGreaterThan = (size) => {
  const message = "No window object";
  const windowElement = window || message;

  if (windowElement === message) return message;

  const resizeHandler = () => {
    if (window.innerHeight > size) {
      return true;
    } else {
      return false;
    }
  };

  windowElement.addEventListener("load", resizeHandler);
  windowElement.addEventListener("resize", resizeHandler);
};

 


export {
  wait,
  throttle,
  checkXAxisLessThan,
  checkXAxisGreaterThan,
  checkYAxisLessThan,
  checkYAxisGreaterThan
};