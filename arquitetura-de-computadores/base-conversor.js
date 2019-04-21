const pow = require('./pow');
const logicalOperator = require('./logical-operators');

/**
 *
 * Base conversion to convert numbers to binaries or
 * binaries to numbers
 */


/**
 * Decimal to Binary
 * @param {Number} num decimal number
 * @param {Number} base base number to convert
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
 * @param {Number} base base number to convert
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



/**
 * Hexadecimal to decimal
 * @param {Number} num hexadecimal number
 * @param {Number} base base number to convert
 */

function decToHex(hexNumber, base = 16) {
  const hex = {
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15
  }

  const hexdecimalToString = (hexNumber).toString();
  const hexadecimal = hexdecimalToString.split('').reverse();
  let result = 0;

  for (let i = 0; i < hexadecimal.length; i++) {
    const hexDigit = hexadecimal[i].toUpperCase();
    const mapNumbers = hex[hexDigit] || hexadecimal[i];

    result += (mapNumbers * pow(base, i));
  }

  return result;
}



/**
 * Decimal to hexadecimal
 * @param {Number} num hexadecimal value
 * @param {Number} base base number to convert
 */

const numToHex = (num) => {
  const roundNum = Math.floor(num);

  if (roundNum === 10) return 'A';
  if (roundNum === 11) return 'B';
  if (roundNum === 12) return 'C';
  if (roundNum === 13) return 'D';
  if (roundNum === 14) return 'E';
  if (roundNum === 15) return 'F';

  return roundNum;
}

function decToHex(num, base = 16) {
  const hexadecimal = [];
  let numToDivide = num;

  // Divide
  while (numToDivide > base) {
    mod = numToDivide % base;
    numToDivide = numToDivide / base;

    hexadecimal.push(numToHex(mod));
  }

  // Push last number to hexadecimal array
  // when it's not divisible anymore
  hexadecimal.push(numToHex(numToDivide));

  // Revert array
  hexadecimal.reverse();
  let hexResult = '';

  // Concatenate values
  for (let i = 0; i < hexadecimal.length; i++) {
    hexResult += hexadecimal[i].toString();
  }

  return hexResult;
}

module.exports = {
  decToBin,
  binToDec,
  decToHex,
  numToHex,
  decToHex
}