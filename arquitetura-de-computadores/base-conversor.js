/**
 *
 * Base conversor to convert numbers to binaries or
 * binaries to numbers
//  * @param {Number} b1 accept number from 0 to 1
 */

function decimalToBinary(num) {
  const base = 2;
  const binary = [];

  let numToDivide = num;
  let mod;

  // Divide decimal
  while (numToDivide > 1) {
    mod = numToDivide % base;
    numToDivide = numToDivide / 2;

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