// 4. Обеспечьте правильную типизацию для указанных функций.
// №1
/**
 * 2 arguments passed: returns a new array
 * which is a result of input being mapped using
 * the specified mapper.
 *
 * 1 argument passed: returns a function which accepts
 * an input and returns a new array which is a result
 * of input being mapped using original mapper.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Function} mapper
 * @param {Array} input
 * @return {Array | Function}
 */
export function map<T, U>(mapper: (value: T, index: number, array: T[]) => U, input?: T[]): U[] | ((input: T[]) => U[]) | typeof map {
  if (arguments.length === 0) {
    return map;
  }
  if (arguments.length === 1) {
    return function subFunction(subInput: T[]): U[] {
      if (arguments.length === 0) {
        return subFunction([]);
      }
      return subInput.map(mapper);
    };
  }
  if (input) {
    return input.map(mapper);
  }
  throw new Error('Missing input array for mapping');
}

// №2
/**
 * 2 arguments passed: returns a new array
 * which is a result of input being filtered using
 * the specified filter function.
 *
 * 1 argument passed: returns a function which accepts
 * an input and returns a new array which is a result
 * of input being filtered using original filter
 * function.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Function} filterer
 * @param {Array} input
 * @return {Array | Function}
 */
export function filter<T>(filterer: (value: T, index: number, array: T[]) => unknown, input?: T[]): T[] | ((input: T[]) => T[]) | typeof filter {
  if (arguments.length === 0) {
    return filter;
  }
  if (arguments.length === 1) {
    return function subFunction(subInput: T[]) {
      if (arguments.length === 0) {
        return subFunction;
      }
      return subInput.filter(filterer);
    };
  }
  return input!.filter(filterer);
}

// №3
/**
 * 2 arguments passed: returns sum of a and b.
 *
 * 1 argument passed: returns a function which expects
 * b and returns sum of a and b.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Number} a
 * @param {Number} b
 * @return {Number | Function}
 */
export function add(a: number, b?: number): number | ((b: number) => number) | typeof add {
  if (arguments.length === 0) {
    return add;
  }
  if (arguments.length === 1) {
    return function subFunction(subB: number) {
      if (arguments.length === 0) {
        return subFunction;
      }
      return a + subB;
    };
  }
  return a + b!;
}
