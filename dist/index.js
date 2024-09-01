/** @license Apache-2.0 */

/* eslint-disable id-length */

'use strict';

/**
* Maximum safe nth factorial when stored in single-precision floating-point format.
*
* @module @stdlib/constants-float32-max-safe-nth-factorial
* @type {integer}
*
* @example
* var FLOAT32_MAX_SAFE_NTH_FACTORIAL = require( '@stdlib/constants-float32-max-safe-nth-factorial' );
* // returns 34
*/


// MAIN //

/**
* The maximum safe nth factorial when stored in single-precision floating-point format.
*
* @constant
* @type {integer}
* @default 34
* @see [factorial]{@link https://en.wikipedia.org/wiki/Factorial}
* @see [IEEE 754]{@link https://en.wikipedia.org/wiki/IEEE_754-1985}
*/
var FLOAT32_MAX_SAFE_NTH_FACTORIAL = 34|0; // asm type annotation


// EXPORTS //

module.exports = FLOAT32_MAX_SAFE_NTH_FACTORIAL;
