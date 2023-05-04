/* const a = document.getElementById('num-first')
const second = document.getElementById('num-second') */
/* ---------- PRIMEIRO --------- */
const showResultNum = document.getElementById('result-num')

function compareTwoNumbers() {
  // função para comparar dois números
  const a = Number(document.getElementById('num-first').value)
  const b = Number(document.getElementById('num-second').value)
  // let a = Number(a.value)
  // let b = Number(second.value)
  let result, resultString
  // if ((a && b) !== (null || undefined)) true
  if (a > b) {
    result = 'maior que '
  } else if (a < b) {
    result = 'menor que '
  } else {
    result = 'igual a'
  }

  resultString = '<p>O primeiro número é ' + result + 'o segundo número.</p>'
  return (showResultNum.innerHTML = resultString)
}

/* ---------- SEGUNDO --------- */
const showResultWord = document.getElementById('result-word')

function compareTwoWords() {
  // função para comparar duas palavras
  let c = String(document.getElementById('word-first').value).length
  let d = String(document.getElementById('word-second').value).length
  let result, resultString

  if (c > d) {
    result = ' maior que '
  } else if (c < d) {
    result = ' menor que '
  } else {
    result = ' igual '
  }
  // no else não possui condição apenas se a condição for falsa ele retorna o resultado, já no 'if' existe sempre uma condição (ou não?), pois as condições já foram declaradas, é como uma exceção.
  resultString = '<p>A primeira palavra tem tamanho' + result + 'a segunda.</p>'
  return (showResultWord.innerHTML = resultString)
}

/* ---------- TERCEIRO --------- */

const showResultDays = document.getElementById('result-days')

/* var today = new Date().toISOString().slice(0, 10)
document.getElementById('date-of-birth')[0].setAttribute('max', today) */

// (exp. vida média) - (idade atual) = (restante de vida)
// T.STAMP EXPEC. MORTE - (T.STAMP ATUAL - T.STAMP  NASC.) = DIAS DE VIDA
// lifeDaysExpectancy = (dateOfBirth + dateOfDeath) - today
// diasRestantesDeVida = (dataNascimento + expectativaDeVida ) - dataAtual
function calculateDays() {
  // função para calcular os dias de vida
  let selGender = document.querySelector('input[name="gender"]:checked')

  const birthDate = new Date(
    document.getElementById('date-of-birth').value
  ).getTime()
  console.log('data de nascimento: ' + birthDate)
  // let daysLived = today - birthDate
  // console.log('dias vividos: ' + daysLived)
  let lifeDaysExpectancy = selGender.value * 365.25 * 24 * 60 * 60 * 1000
  // timeStamp
  const today = new Date().getTime()

  const remainingDaysOfLife =
    (birthDate + lifeDaysExpectancy - today) / (1000 * 60 * 60 * 24)

  return (showResultDays.innerHTML =
    '<p>Você viverá aproximadamente mais <span>' +
    remainingDaysOfLife.toFixed(0) +
    '</span> dias de vida ‼</p>')
}

function clearResult() {
  // função para limpar os resultados
  document.getElementById('result-days').innerHTML = ''
}

/*  let birthDateTimestamp = new Date(birthDate).getTime()
  let deathDateTimestamp = new Date(deathDate).getTime()
  let currentDateTimestamp = new Date().getTime()
  let days = (deathDateTimestamp - birthDateTimestamp) / (1000 * 60 * 60 * 24)

  let daysOfLife =
    (currentDateTimestamp - birthDateTimestamp) / (1000 * 60 * 60 * 24)
  let daysOfLifeExpect =
    (deathDateTimestamp - currentDateTimestamp) / (1000 * 60 * 60 * 24)
  let daysOfLifeExpectString =
    '<p>Você tem ' + daysOfLife + ' dias de vida.</p>'
  let daysOfLifeExpectString2 =
    '<p>Você tem ' + daysOfLifeExpect + ' dias de vida.</p>'
  let daysOfLifeString = '<p>Você tem ' + days + ' dias de vida.</p>'
  return (showResultDays.innerHTML =
    daysOfLifeString + daysOfLifeExpectString + daysOfLifeExpectString2)
}
const selGen = document.getElementsByName('gender')
 */
// var value = e.options[e.selectedIndex].value;
// var text = e.options[e.selectedIndex].text;

// selGen.options[selGen.selectedIndex].value

/* function calculateDays() {
  // função para calcular os dias de vida
  let birthDate = document.getElementById('date-of-birth').value
  let deathDate = document.getElementById('gender-life-expectancy').value

  let birthDateTimestamp = new Date(birthDate).getTime()
  let deathDateTimestamp = new Date(deathDate).getTime()
  let currentDateTimestamp = new Date().getTime()
  let days = (deathDateTimestamp - birthDateTimestamp) / (1000 * 60 * 60 * 24)
  let daysOfLife =
    (currentDateTimestamp - birthDateTimestamp) / (1000 * 60 * 60 * 24)
  let daysOfLifeExpect =
    (deathDateTimestamp - currentDateTimestamp) / (1000 * 60 * 60 * 24)
  let daysOfLifeExpectString =
    '<p>Você tem ' + daysOfLife + ' dias de vida.</p>'
  let daysOfLifeExpectString2 =
    '<p>Você tem ' + daysOfLifeExpect + ' dias de vida.</p>'
  let daysOfLifeString = '<p>Você tem ' + days + ' dias de vida.</p>'
  return (showResultDays.innerHTML =
    daysOfLifeString + daysOfLifeExpectString + daysOfLifeExpectString2)
} */

//  DATE.parse(dateString)
//  DATE.toISOString()
//  DATE.toDateString()
//  DATE.toTimeString()
//  DATE.toLocaleDateString()
//  DATE.toLocaleTimeString()
//  DATE.toLocaleString()
//  DATE.toUTCString()

// function lifeDaysExpectancy() {
//   let birthDate = document.getElementById('date-of-birth').value
//   let today = new Date().toISOString().split('T')[0]
//   let birthDateDate = new Date(birthDate)
//   let todayDate = new Date(today)
//   let result, resultString
// }

/* var day = a,
  month = b,
  year = c

var today = new Date.now()
var birthday = new Date(c, b - 1, a).getTime()

var age = today - birthday
var ageDate = new Date(age)
var finalAge = Math.abs(ageDate.getUTCFullYear() - 1970)
console.log(finalAge) */
// console.log('${c} is greater than d')}
// document.querySelector('#getResult') =
// document.getElementById('result').innerHTML

/* showResult = '<p>' + a + ' é ' + compareTwoNumbers(a, b) + b + '</p>' */
// resultString = `${a} é ${result} a ${b}`

/*
if (a > b) {
  console.log('a is greater than b')
} else if (a < b) {
  console.log('a is lesser than b')
} else {
  console.log('a is equal to b')
} */
