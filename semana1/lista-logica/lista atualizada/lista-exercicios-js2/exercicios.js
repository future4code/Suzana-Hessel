// Exemplos

// Exercício 0A

function soma(num1, num2) {
   // implemente sua lógica aqui
   return num1 + num2
}

// Exercício 0B

function imprimeMensagem() {
   // implemente sua lógica aqui
   const mensagem = prompt('Digite uma mensagem!')

   console.log(mensagem)
}

// Exercícios

//Exercício 1

function calculaAreaRetangulo() {
   const altura = prompt("Insira a altura do retângulo ")
   const largura = prompt("Insira a largura do retângulo")

   console.log(altura * largura)
}

//Exercício 2

function imprimeIdade() {
   const anoAtual = prompt("Insira o ano atual")
   const anoNascimento = prompt("Insira o ano em que nasceu")

   console.log(anoAtual - anoNascimento)
}

//Exercício 3

function calculaIMC(peso, altura) {
      const imc = peso / (altura * altura)
      return imc
}

//Exercício 4

function imprimeInformacoesUsuario() {
   const nome = prompt("Insira seu nome")
   const idade = prompt("Insira sua idade")
   const email = prompt("Insira seu e-mail")

   console.log("Meu nome é " + nome + ", tenho " + Number(idade) + " anos, " + "e o meu email é " + email + ".")
}

//Exercício 5

function imprimeTresCoresFavoritas() {
   const cor1 = prompt("Digite sua cor favorita")
   const cor2 = prompt("Digite outra cor favorita")
   const cor3 = prompt("Digite mais uma cor favorita")

   const arrayCores = [cor1, cor2, cor3]

   console.log(arrayCores)
}

//Exercício 6

function retornaStringEmMaiuscula(string) {
   return string.toUpperCase()
}

//Exercício 7

function calculaIngressosEspetaculo(custo, valorIngresso) {
   const ganhosEspetaculo = custo / valorIngresso
   return ganhosEspetaculo
}

// Exercício 8

function checaStringsMesmoTamanho(string1, string2) {
   const comparaStrings = string1.length === string2.length
  return comparaStrings
}

// Exercício 9

function retornaPrimeiroElemento(array) {
   return array[0]
}

// Exercício 10

function retornaUltimoElemento(array) {
   const arrayTamanho = array.length - 1
   return array[arrayTamanho]
}

//Exercício 11

function trocaPrimeiroEUltimo(array) {
   let primeiroIndice = array[0]
   let ultimoIndice = array[array.length - 1]
   array[0] = ultimoIndice
   array[array.length - 1] = primeiroIndice

   return array
}

// Exercício 12

function checaIgualdadeDesconsiderandoCase(string1, string2) {
   const checaStrings = string1.length == string2.length
   return checaStrings
}

// Exercício 13

function checaRenovacaoRG() {
   const anoAtual1 = prompt("Digite o ano atual")
   const anoNascimento1 = prompt("Digite o ano que você nasceu")
   const dataEmissaoRg = prompt("Digite a data de emissão da sua carteira de identidade")
   console.log(" Ano atual: ")
   const idadeUsuarioRg = anoAtual1 - anoNascimento1
   const renovacaoRg1 = idadeUsuarioRg <= 20
   const renovacaoRg2 = idadeUsuarioRg >= 20 <= 50
   const renovacaoRg3 = idadeUsuarioRg > 50
   console.log(renovacaoRg1)

}

// Exercício 14

function checaAnoBissexto(ano) {
   // implemente sua lógica aqui
}

// Exercício 15

function checaValidadeInscricaoLabenu() {
   // implemente sua lógica aqui
}