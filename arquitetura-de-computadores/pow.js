/**
 * Exponentiation
 * @param {Number} num base number
 * @param {Number} exp exponent number
 */

function pow(num, exp) {
  let expoent = exp;
  let result = num;

  if (num === 0 || exp === 0) {
    return 1;
  }

  while (expoent > 1) {
    result = result * num;
    expoent--;
  }

  return result;
}

// needed to work on node console
module.exports = pow;