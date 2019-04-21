const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const {
  binaryAdder
} = require('./binary-adder')
const {
  binToDec
} = require('./base-conversor')

function binaryAdderInput() {
  rl.question('Insira o primeiro binário \n', b1 => {

    rl.question('Insira o segundo binário \n', b2 => {

      const {
        result,
        carryOut,
        resultWithCarryOut
      } = binaryAdder(b1, b2)

      console.log(`Primeiro valor informado em decimal --> ${binToDec(b1)}`)
      console.log(`Segundo valor informado em decimal --> ${binToDec(b2)} \n`)

      console.log(`Carry out --> ${carryOut} \n`)

      console.log(`Resultado em decimal com carry out --> ${binToDec(resultWithCarryOut)}`)
      console.log(`Resultado em binário com carry out --> ${resultWithCarryOut} \n`)

      console.log(`Resultado em decimal sem carry out --> ${binToDec(result)}`)
      console.log(`Resultado em binário sem carry out --> ${result}`)

      rl.close()
    })
  })
}

binaryAdderInput()