// const classif = document.bmiForm.meaning.value
const doc = document.bmiForm
const msg = document.bmiForm.meaning
const formatNumber = new Intl.NumberFormat()

function calcBmi() {
  let weight = Number(doc.weight.value)
  let height = Number(doc.height.value)
  let calcBmi = weight / (height / 100) ** 2

  if (isNaN(weight, height) !== true && weight > 0 && height > 0) {
    var finalBmi = calcBmi.toFixed(1)
    var result = formatNumber.format(finalBmi)
    doc.bmi.value = result
    if (finalBmi < 18.5) {
      msg.value = 'Seu peso está muito abaixo do desejável.'
    } else if (finalBmi >= 18.5 && finalBmi < 25) {
      msg.value = 'Peso dentro da normalidade.'
    } else if (finalBmi >= 25 && finalBmi < 30) {
      msg.value = 'Sua condição é de sobrepeso.'
    } else if (finalBmi >= 30 && finalBmi < 35) {
      msg.value = 'Está com obesidade.'
    } else if (finalBmi >= 35) {
      msg.value = 'Está com obesidade mórbida.'
    }
  } else {
    alert('Há algum problema nos dados fornecidos.')
  }

  return console.log(finalBmi)
}

// addeventlistener(onkeydown, checker() {
//     let

//     if (event.keyCode == 13) {
//         calcBmi()
//     }
// }

/* const name = (params) => {

} */

//     if (event.charCode >= 48 && event.charCode <= 57) {
//       return true
//     } console.log(alert) else { return false }
//     alert('Por favor, digite apenas números.')

//   })

// addeventlistener(event, function) //

// if (doc.addEventListener) {
//   doc.addEventListener('submit', calcBmi, false)
// } else if (doc.attachEvent) {
//   // IE
//   doc.attachEvent('onsubmit', calcBmi)
// }
// ;('Insira apenas valores numéricos')
