// element nodes

const result = document.getElementById('result')
const minimum = document.getElementById('min')
const maximum = document.getElementById('max')

// function checkInteger(value) {
//   return /^\d+$/.test(value)
// }

function getRandomNumberBetweenIntegers() {
  let min = Number(minimum.value),
    max = Number(maximum.value)
  /* let intMin = parseInt(min),
    intMax = parseInt(max)
  console.log(typeof min, typeof intMin, intMax) */

  let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min

  if (
    isNaN(minimum.value.replace(',', '.')) ||
    isNaN(maximum.value.replace(',', '.'))
  ) {
    alert('Insira um valor numérico válido!')
    // } else if (min != intMin || max != intMax) {
  } else if (parseInt(min) != min || parseInt(max) != max) {
    // } else if ((min % 1 || max % 1) !== 0) {
    // ((/^\d+$/.test(intMax) && /^\d+$/.test(intMin)) !== true) {
    alert('Existe número inserido que não é inteiro!')
  } else if (parseInt(max) < parseInt(min)) {
    alert('Erro:\n o valor máximo não pode ser menor que o mínimo!')
  }
  return (result.value = randomNumber)
}

