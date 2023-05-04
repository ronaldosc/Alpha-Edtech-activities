// element nodes

const resultNumInf = document.getElementById('result-inf')
const resultNumSup = document.getElementById('result-sup')
const floating = document.getElementById('inputNumber')

function getRandomNumberBetweenFloatings() {
  const numString = floating.value.replace(',', '.')
  let float = Number(numString)

  let inferiorNum = Math.floor(float),
    superiorNum = Math.ceil(float)

  if (isNaN(numString)) {
    alert('Insira um valor numérico válido!')
  }
  return (resultNumInf.value = inferiorNum), (resultNumSup.value = superiorNum)
}
