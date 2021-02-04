export const isDeepEqual = (obj1: any, obj2: any, testPrototypes = false): boolean => {
  if (obj1 === obj2) {
    return true;
  }

  if (typeof obj1 === 'function' && typeof obj2 === 'function') {
    return obj1.toString() === obj2.toString();
  }

  if (obj1 instanceof Date && obj2 instanceof Date) {
    return obj1.getTime() === obj2.getTime();
  }

  if (
    Object.prototype.toString.call(obj1) !== Object.prototype.toString.call(obj2) ||
    typeof obj1 !== 'object'
  ) {
    return false;
  }

  const prototypesAreEqual = testPrototypes
    ? isDeepEqual(Object.getPrototypeOf(obj1), Object.getPrototypeOf(obj2), true)
    : true;

  const obj1Props = Object.getOwnPropertyNames(obj1);
  const obj2Props = Object.getOwnPropertyNames(obj2);

  return (
    obj1Props.length === obj2Props.length &&
    prototypesAreEqual &&
    obj1Props.every((prop) => isDeepEqual(obj1[prop], obj2[prop]))
  );
};

/**
 * 指定次数调用异步方法，调用中，如果成功，则返回，不再调用，如果失败，则继续调用
 * 默认调用 三次
 */
export const applyAsyncFnTimes = (fn: Function, times: number = 3) => {
  return () => {
    return new Promise((resolve, reject) => {
      const runner = () => {
        if (times > 0) {
          fn()
            .then(resolve) // 成功了就直接返回
            .catch(() => {
              // 失败了再次执行
              times--;
              runner();
            });
        } else {
          // 执行达到指定次数，不再执行,返回失败
          reject();
        }
      };
      runner();
    });
  };
};
