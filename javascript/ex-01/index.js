// I always use Eruda for view-source on websites. Execute the following bookmarklet:
// javascript: (function () {
//   var script = document.createElement('script')
//   script.src = '//cdn.jsdelivr.net/npm/eruda'
//   document.body.appendChild(script)
//   script.onload = function () {
//     eruda.init()
//   }
// })()

// function greet() {
//   alert('Hello, World')
// }
// object.onclick = function greet() {
//   console.log('Hey there clicker!')
// }
// confirm('Press a button!\nEither OK or Cancel.')

// greet()

// object.addEventListener('click', console.log('Oi'))
// function greet(e) {
//   console.log('We clicked on: ' + e.target.id)
// }

// const text = document.getElementById('bt')
// text.onclick = function () {
//   console.log('Olá novamente!')
// }
var styButton = document.getElementById('bt').style
let cn = console.log

function pageLoad() {
  alert('Página \n\t interativa.')
}
function greet() {
  alert('Verifique o console para mais informações...')
  cn('Olá, Console!')
  confirm('Pressione qualquer botão!\nAmbos fecham esse aviso:')
  styButton.display = 'none'
}

// document.getElementById('bt').addEventListener('click', function greet() {
//   console.log('Olá, Console!')
// })

// ------------------------
// function imprimir() {
//   console.log('O que você deseja imprimir!')
// }
// var div = document.querySelector('div')

// addEventListener('click', item)

// function item() {
//   console.log('click')
// }

// function func() {
//     document.getElementById('bt').onclick
//   }

// function func() {
//   console.log('Olá Mundo')
// }
// // accessing the elements from our page
// var buttonElement = document.querySelector('button')
// var textElement = document.querySelector('section')

// // listening to a click event on the button
// buttonElement.addEventListener('click', changeText, false)

// // what gets called when the button is clicked
// function changeText(e) {
//   textElement.innerText = 'Olá Mundo!'
// }
// alert('Hello World')
