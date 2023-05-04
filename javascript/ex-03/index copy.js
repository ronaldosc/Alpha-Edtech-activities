onkeydown = 'return event.charCode >= 48 && event.charCode <= 57'
function byId(id) {
  return document.getElementById(id)
}
byId

document.getElementById('operator').onclick = function () {
  document.getElementById('operand').value =
    document.getElementById(operand).value + this.value
}
function mathematicalOperations(a, b, c) {
  let sum = a + b + c
  let product = a * b * c
  let difference = a - b - c
  let quotient = a / b / c
  let remainder = (a % b) % c
  return [sum, product, difference, quotient, remainder]
}
function getResult(a, b, c) {
  let result = mathematicalOperations(a, b, c)
  return result
}
function operations(a, b, c) {
  // a, b, c are the numbers
  let result = getResult(a, b, c) // result is an array of numbers
  let sum = result[0]
  let product = result[1]
  let difference = result[2]
  let quotient = result[3]
  let remainder = result[4]
  return [sum, product, difference, quotient, remainder]
}

function getResult() {
  // arguments
  let a = arguments[0]
  let b = arguments[1]
  let c = arguments[2]
  let result = getResult(a, b, c)
  return result
}

function getResult(a, b, c) {
  let result = 0
  switch (c) {
    case '+':
      result = a + b
      break
    case '-':
      result = a - b
      break
    case '*':
      result = a * b
      break
    case '/':
      result = a / b
      break
  }
  return result
}

// basic math operations with arguments and return values in functions  //

var e = document.getElementById('elementId')
var value = e.options[e.selectedIndex].value
var text = e.options[e.selectedIndex].text
