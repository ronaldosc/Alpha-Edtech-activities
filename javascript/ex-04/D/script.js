// Censo 2022 mostra população com 51,7% de mulheres e 16,7% de idosos
var pessoas = [
  { genero: "feminino", idade: 20 },
  { genero: "feminino", idade: 60 },
  { genero: "masculino", idade: 40 },
  { genero: "masculino", idade: 70 },
  { genero: "feminino", idade: 30 },
  { genero: "masculino", idade: 50 },
];

function sortear() {
  var pessoa = pessoas[Math.floor(Math.random() * pessoas.length)];
  var resultado = "A pessoa sorteada é ";
  if (pessoa.genero === "feminino") {
    resultado += "uma mulher";
  } else {
    resultado += "um homem";
  }
  resultado += " com " + pessoa.idade + " anos.";
  if (pessoa.idade >= 60) {
    resultado += " Ela é idosa.";
  } else {
    resultado += " Ela não é idosa.";
  }
  document.getElementById("resultado").innerHTML = resultado;
}

