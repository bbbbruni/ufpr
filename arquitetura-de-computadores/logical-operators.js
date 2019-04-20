/**
 *
 * Logical operators methods
 * @param {Number} b1 accept binary number
 * @param {Number} b2 accept binary number
 */

// AND operator
function AND(b1, b2) {

  if (b1 === 1 && b2 === 1) {
    return 1;
  }

  return 0;
}

// OR operator
function OR(b1, b2) {

  if (b1 === 0 && b2 === 0) {
    return 0;
  }

  return 1;
}

// NOT operator
function NOT(b1) {

  if (b1 === 0) return 1;
  return 0;
}

// NOT AND operator
function NAND(b1, b2) {

  if (b1 === 1 && b2 === 1) {
    return 0;
  }

  return 1;
}

// NOT OR operator
function NOR(b1, b2) {

  if (b1 === 0 && b2 === 0) {
    return 1;
  }

  return 0;
}

// XOR operator
function XOR(b1, b2) {

  if (b1 === 0 && b2 === 1) {
    return 1;
  }

  if (b1 === 1 && b2 === 0) {
    return 1;
  }

  return 0;
}

module.exports = {
  AND,
  OR,
  NOT,
  NAND,
  NOR,
  XOR
}