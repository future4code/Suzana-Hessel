//Exercícios de interpretação de código

/*Leia o código abaixo

function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

a) O que vai ser impresso no console?

Vai ser impresso no console, os valores resultantes da multiplicação dos argumentos 2 e 10, por 5,
que são respectivamente, 10 e 50.

b) O que aconteceria se retirasse os dois console.log e 
simplesmente invocasse a função minhaFuncao(2) e minhaFuncao(10)? O que apareceria no console?

o Programa iria ser executado, mas não seria impresso no console.

2. Leia o código abaixo

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

a. Explique o que essa função faz e qual é sua utilidade

Essa função vai executar a tarefa de ler o texto inserido pelo usuário,
retornando um true se o caracter cenoura for detectado no texto inserido pelo usuário,
ou false se não detectado.

b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:

i.   Eu gosto de cenoura

o programa encontra o caracter cenoura, e imprime true

ii.  CENOURA é bom pra vista

o programa encontra o caracter CENOURA, e imprime true

iii. Cenouras crescem na terra

o programa encontra o caracter Cenouras, e imprime true

*/

//Exercícios de escrita de código

/*
1.Escreva as funções explicadas abaixo:

a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem 
falando algumas informações sobre você, como: 


"Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."

Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. 
Lembrando que a função não possui entradas, apenas imprime essa mensagem.

*/

function sobreMim() {

    const nome = "Suzana"
    const idade = 28
    const cidade = "Uberlândia"
    const profissão = "estudante"

    const dados = "Me chamo " + nome + " tenho " + idade + " anos, " + "moro em " + cidade + " e sou " + profissão
    
    console.log(dados)

}

sobreMim() 


/*

b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: 
o nome (string), a idade (number), a cidade (string) e uma profissão (string). 
Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:

Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO]
*/

function sobreMim2(nome, idade, cidade, profissão) {

    const dados2 = "Eu sou " + nome + ", tenho " + idade + " anos, " + "moro em " + cidade + " e sou " + profissão +"."
    return dados2 
   
}
const dadosInformados2 = sobreMim2("Suzana", 28, "Uberlândia", "estudante")

console.log(dadosInformados2)


/* 2.Escreva as funções explicadas abaixo:

a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. 
Invoque a função e imprima no console o resultado.
*/

function doisNumeros(numero1, numero2){
    const somaDosNumeros = numero1 + numero2
    return somaDosNumeros

}

const somaDosNumeros = doisNumeros(2, 4)

console.log(somaDosNumeros)



//b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

function comparaDoisNumeros(numero3, numero4){
    const comparaNumeros = numero3 >= numero4
    return comparaNumeros
}
const comparaNumeros = comparaDoisNumeros(10, 8)

console.log(comparaNumeros)


//c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

function boolNumero(numero) {
    const numeroPar = numero % 2 === 0
    return numeroPar
}

const resultadoPar = boolNumero(5)
console.log(resultadoPar)


/*d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, 
juntamente com uma versão dela em letras maiúsculas.

*/

function fraseMaiuscula(texto) {
   return texto.toUpperCase() 
}

const respostaFrase = fraseMaiuscula("cafe")
console.log(respostaFrase, respostaFrase.length)

/*
3.Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). 
Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. 
Por fim, mostre no console o resultado das operações:

Números inseridos: 30 e 3
Soma: 33
Diferença: 27
Multiplicação: 90
Divisão: 10
*/

//Soma

function operacaoSoma(n1, n2) {
    const opSoma = n1 + n2
    return opSoma
}
const numeroDoUsuario1 = prompt("Insira um número") 
const numeroDoUsuario2 = prompt("Insira outro número") 
console.log("Números inseridos: " + numeroDoUsuario1 + " e " + numeroDoUsuario2)
const resultTotal = operacaoSoma(Number(numeroDoUsuario1), Number(numeroDoUsuario2))
console.log("Soma:", resultTotal)

//Diferença

function operacaoDiferenca(n1, n2) {
    const opDiferenca = n1 - n2
    return opDiferenca
}

const resultTotal2 = operacaoDiferenca(Number(numeroDoUsuario1), Number(numeroDoUsuario2))

console.log("Diferença:", resultTotal2)


//Multiplicação

function operacaoMultiplicacao(n1, n2) {
    const opMultiplicacao = n1 * n2
    return opMultiplicacao
}
const resultTotal3 = operacaoMultiplicacao(Number(numeroDoUsuario1), Number(numeroDoUsuario2))
console.log("Multiplicação: ", resultTotal3)

//Divisão

function operacaoDivisao(n1, n2) {
    const opDivisao = n1 / n2
    return opDivisao
}
const resultTotal4 = operacaoDivisao(Number(numeroDoUsuario1), Number(numeroDoUsuario2))
console.log("Divisão: ", resultTotal4)

//DESAFIO

/*
1. Funções são trechos de códigos como quaisquer outros mas que podemos acessá-los mais de uma vez ao longo 
do código através de invocações/chamadas. Então, funções podem chamar/invocar outras funções também. 
Sua tarefa é escrever duas funções:

a) Escreva uma arrow function que recebe um parâmetro e imprime no console esse parâmetro
*/

const arrowFrase= (texto1) => {
    return texto1
}
const fraseFinal = arrowFrase("Pipoca")
console.log(fraseFinal)

// /*
// b) Escreva outra arrow function que recebe dois valores como parâmetros mas nenhum retorno. 
// Faça a soma entre esses valores e chame a sua primeira função mandando este resultado da 
// soma como entrada para imprimi-lo
// */

const arrowSomaDois = (n3, n4) => {
    const arrowSoma = n3 + n4
  
}
const resultArrowSoma = arrowSomaDois(2, 3) 

console.log(arrowFrase(arrowSomaDois(2, 3)))

/*
2. Faça uma função que execute o teorema de Pitágoras, recebendo dois catetos e calculando o valor da hipotenusa. 
Retorne este valor, invoque a função e imprima o resultado no console. 
*/

function calculoHipotenusa(a, b) {
    const h = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
    return h
}
const resultadoHipotenusa = calculoHipotenusa(2, 4)
console.log("h= ", resultadoHipotenusa)
