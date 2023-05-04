/* onkeydown = 'return event.charCode >= 48 && event.charCode <= 57'
function byId(id) {
  return document.getElementById(id)
}

document.getElementById('operator').onclick = function () {
  document.getElementById('operand').value =
    document.getElementById(operand).value + this.value
} */

// var e = document.getElementById("ddlViewBy");
// var strUser = e.options[e.selectedIndex].text
const firstNum = document.getElementById('operand-left')
const secondNum = document.getElementById('operand-right')
const selOper = document.getElementById('operator')
const noSelect = document.getElementById('advices')

function mathematicalOperations() {
  const showResult = document.getElementById('operationResult')
  const a = Number(firstNum.value)
  const b = Number(secondNum.value)
  var sum = a + b
  var product = a * b
  var difference = a - b
  var quotient = a / b
  // console.log(quotient)
  clearResult()

  if ((firstNum.value && secondNum.value) !== '' && selOper.value === '') {
    noSelect.innerHTML = 'Selecione um operador!'
  } else if (
    (firstNum.value || secondNum.value) !== '' &&
    (firstNum.value && secondNum.value) === ''
    // fazer tabela da verdade para entender melhor
  ) {
    noSelect.innerHTML = 'Preencheu apenas um número!'
  } else if (selOper.value == 3 && isFinite(quotient) === false && b === 0) {
    noSelect.innerHTML = 'Não dividirás por zero!'
  } else if ((firstNum.value && secondNum.value && selOper.value) !== '') {
    let result = [sum, difference, product, quotient]
    console.log(result)
    return showResult.setAttribute('value', result[selOper.value])
  } else
    alert(
      '  📌\n\nPor favor, forneça os valores apropriados para realizar a operação.'
    )
}
function clearResult() {
  const showResult = document.getElementById('operationResult')
  showResult.setAttribute('value', null)
  noSelect.innerHTML = ''
}

/* const sendResult = document.getElementById('send-result')
var clickHandler = function (evt) {
  evt.preventDefault()
  if (firstNum.value.length < 1) {
    sendResult.setAttribute('disabled', true)
    noSelect.textContent = 'Title must be more than 10 characters'
  }
}

if (preventSubmit) {
  preventSubmit.forEach(item => {
    sendResult.addEventListener('button', clickHandler, false)
  })
} */
/* if (dmatOper) {
  sendResult.addEventListener('input', () => {
    if ((firstNum.value.length && secondNum.value.length) != null) {
      sendResult.setAttribute('disabled', false)
    }
  })
} */

/*
;(firstNum, secondNum).addEventListener('input', function () {
  if (firstNum.value === '' || secondNum.value === '') {
    sendResult.setAttribute('disabled', false)
  }
})
 */
// (a !== '' && b !== '')
/* if selOper.value === '' {
    showResult.innerHTML = '<p>Selecione um operador</p>'
  } else {
    const strOper = selOper.value
    let result
    if strOper === '+' {
      result = a + b
    } else if strOper === '-' {
      result = a - b
    } else if strOper === '*' {
      result = a * b
    } else if strOper === '/' {
      result = a / b
    } else if strOper === '%' {
      result = a % b
    } else if strOper === '**' {
      result = a ** b
    } else if strOper === '++' {
      result = a++
    } else if strOper === '--' {
      result = a--
    } else  {
      result = '<p>Selecione um operador</p>'
    }
    showResult.innerHTML = `<p>${a} ${strOper} ${b} = ${result}</p>`
  } */

/* selOper.addEventListener(
  'onchange',
  (changeOperator = function () {
    showResult.setAttribute('value', result[selOper.value])
  })
) */

/*  if selOper.value === ' ' {
    showResult.innerHTML = '<p>Selecione um operador</p>'
  } else {
    const strOper = selOper.value
    let result
    if strOper === '+' {
      result = a + b
    } else if strOper === '-' {
      result = a - b
    } else if strOper === '*' {
      result = a * b
    } else if strOper === '/' {
      result = a / b
    } else if strOper === '%' {
      result = a % b
    } else if strOper === '**' {
      result = a ** b
    } else if strOper === '++' {
      result = a++
    } else if strOper === '--' {
      result = a--
    } else  {
      result = '<p>Selecione um operador</p>'
    }
    showResult.innerHTML = `<p>${a} ${strOper} ${b} = ${result}</p>`
  }
*/

/*   selOper.value === '+'
? sum
: selOper.value === '-'
? difference
: selOper.value === '*'
? product
: selOper.value === '/'
? quotient
: 'error' */
// selOper.onchange = function () {
// let strOper = selOper.value
// let operationResult = `${a} ${strOper} ${b} = ${result}`
// se o value estiver definiido com símbolo da operação fazer como acima a operação in situ

/* document
  .querySelector('#send-result')
  .addEventListener(onclick, function getResult() {
    let result = mathematicalOperations(a, b)

    console.log(result)
    return result
  }) */

/* function operations(a, b, c) {
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
} */
// basic math operations with arguments and return values in functions  //
