const {
  AND,
  OR,
  XOR
} = require('./logical-operators');

/**
 * Partial adder
 * @param {Number} b1 - binary1
 * @param {Number} b2 - binary2
 * 
 * @returns {Object} sum - Represents the sum of the binary values
 * @returns {Number} sum.result - The bit result of the binary sum
 * @returns {Number} sum.carryOut - The carry out of the binary sum
 **/
function partialAdder(b1, b2) {
  const result = XOR(b1, b2);
  const carryOut = AND(b1, b2);

  return {
    result,
    carryOut
  };
}

/**
 * Full adder
 * @param {Number} b1 - binary1
 * @param {Number} b2 - binary2
 * @param {Number} [carryIn = 0] - Represent carryIn value
 * 
 * @returns {Object} sum - Represents the sum of the binary values
 * @returns {Number} sum.result - The bit result of the binary sum
 * @returns {Number} sum.carryOut - The carry out of the binary sum
 **/
function fullAdder(b1, b2, carryIn = 0) {
  const bitSum = XOR(b1, b2);

  const carryOut = OR(AND(b1, b2), AND(bitSum, carryIn));
  const result = XOR(bitSum, carryIn);

  return {
    result,
    carryOut
  };
}


/**
 * Full adder
 * @param {Number} b1 - binary1
 * @param {Number} b2 - binary2
 * 
 * @returns {Object} result - Represents the sum of the binary values
 * @returns {Number} result.sum - The binary result of the binary sum WITHOUT THE CARRY OUT
 * @returns {Number} sum.carryOut - The carry out of the binary sum
 **/
function binaryAdder(b1, b2) {
  const arr_b1 = String(b1).split('').reverse()
  const arr_b2 = String(b2).split('').reverse()

  const result = arr_b1.reduce((prevObj, currentVal, index) => {
    const {
      carryIn,
      sum
    } = prevObj

    if (index === 0) {
      const partialSum = partialAdder(Number(arr_b1[index]), Number(arr_b2[index]))

      return {
        carryIn: partialSum.carryOut,
        sum: `${partialSum.result}`
      }
    }

    const fullSum = fullAdder(Number(arr_b1[index]), Number(arr_b2[index]), carryIn)

    return {
      carryIn: fullSum.carryOut,
      sum: `${fullSum.result}${sum}`
    }
  }, {
    carryIn: 0,
    sum: ''
  })

  return {
    carryOut: result.carryIn,
    result: result.sum,
    resultWithCarryOut: `${result.carryIn}${result.sum}`
  }
}

module.exports = {
  partialAdder,
  fullAdder,
  binaryAdder
}