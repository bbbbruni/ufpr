const pow = require('./pow');

/**
 *
 * Base conversion to convert numbers to binaries or
 * binaries to numbers
 */

/**
 * Decimal to Binary
 * @param {Number} num decimal number
 * @param {Number} base base number to convert (binary or octal)
 */

function decToBin(num, base = 2) {
  const binary = [];
  let numToDivide = num;
  let mod;

  // Divide
  while (numToDivide > 1) {
    mod = numToDivide % base;
    numToDivide = numToDivide / base;

    binary.push(mod);
  }

  // Revert array
  binary.reverse();
  let finalBinary = '';

  // Concatenate numbers
  for (let i = 0; i < binary.length; i++) {
    finalBinary += binary[i].toString().charAt(0);
  }

  return finalBinary;
}

/**
 * Binary to Decimal
 * @param {Number} num decimal number
 * @param {Number} base base number to convert (binary or octal)
 */

function binToDec(num, base = 2) {
  let binaryToString = (num).toString();
  let binary = binaryToString.split('').reverse();
  let decimal = 0;

  for (let i = 0; i < binary.length; i++) {
    decimal += (binary[i] * pow(base, i));
  }

  return decimal;
}