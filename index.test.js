const calc = require("./index")

try {
  
  let sumTest = calc.sum(2,2)

  if(sumTest != 4) {
    throw new Error("The sum of 2 + 2 is wrong, value: " + sumTest)
  }

  let subTest = calc.sub(2,2)

  if(subTest != 0) {
    throw new Error("The sub of 2 - 2 is wrong, value: " + subTest)
  }

  let multTest = calc.mult(2,2)

  if(multTest != 4) {
    throw new Error("The mult of 2 * 2 is wrong, value: " + multTest)
  }

  let divTest = calc.div(2,2)

  if(divTest != 1) {
    throw new Error("The div of 2 / 2 is wrong, value: " + divTest)
  }

  console.log("All tests ok!")

} catch (error) {
  throw error.message
}