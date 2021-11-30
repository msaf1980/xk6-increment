/**
 * xk6-increment number increment (with upper limit)
 *
 * The main generator class is [Increment]
 *
 * ```js
 * import { Increment } from "k6/x/increment"
 *
 * let counter = new Increment(10);
 * console.log(counter.New());
 * ```
 */
  
  export declare class Increment {
    /**
     * Create new Increment instance.
     *
     * @param max max value for increment counter
     */
    constructor(max?: number);

    /**
    * ipv4Address will generate a random version 4 ip address
    */
    next(): number;
  }
