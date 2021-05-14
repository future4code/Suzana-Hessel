/*Exercícios de interpretação de código 


1.O que o código abaixo está fazendo? 
Qual o resultado impresso no console?

let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)

O código está incrementando a variável valor até atingir 
o índice < 5. O resultado impresso será 10, no índice 4.

2. Leia o código abaixo:

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

a) O que vai ser impresso no console?

O programa contém um array lista, de 10 índices e 11 elementos, no qual será 
impresso no console os valores maiores que 18. Então, o programa irá repetir o 
processo até percorrer todos os números do array > 18 e imprimir no console.


b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, 
o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?

Sim, usando for...of.. o programa fica assim:

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
let i = 0
for (let numero of lista) {
  if (numero > 18) {
		console.log("valores: " + numero + ", indices: " + i)
	}
  i++
}

// usando for, ficaria assim:

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let i = 0;  i < lista.length; i++){
   if (lista[i] > 18) {
		console.log("valores: " + lista[i] + ", indices: " + i)
	}
}

3. Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "0"
  }
  console.log(linha)
  quantidadeAtual++
}

Seria impresso no console a quantidade de linhas de acordo com o valor que o usuario colocou, 
no caso 4 linhas de "0".
*/

//Exercícios de escrita de código

/* 

1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 

a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"

b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, 
um por um, e guarde esses nomes em um array

c) Por fim, imprima o array com os nomes dos bichinhos no console

*/
 
// const quantidadeBichosDeEstimacao = Number(prompt("Quantos bichinhos de estimação você tem?"))
// let listaBichosEstimacao = []
//   if(quantidadeBichosDeEstimacao == 0){
//   console.log("Que pena! Você pode adotar um pet!")
// } else{
//   for(let i = 0; i < quantidadeBichosDeEstimacao; i++){
//     const nomesBichosEstimacao = prompt(`Digite o nome dos bichinhos, um de cada vez`)
//     listaBichosEstimacao.push(nomesBichosEstimacao)
//   }
// } console.log(listaBichosEstimacao)


/* 

2. Considere que você tenha acesso a um array  (chamado de 'array original') que é composto somente de números. 
Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:

a) Escreva um programa que **imprime** cada um dos valores do array original.

b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10

*/

const valoresArrayOriginal = [5, 10, 15, 20, 25, 30]

function imprimeArrays (array){
  console.log(valoresArrayOriginal)
  
}
imprimeArrays(valoresArrayOriginal)

const valoresArrayOriginal = [5, 10, 15, 20, 25, 30]

function imprimeArrays (array){
  for(let i = 0; i < valoresArrayOriginal.length; i++ ){
    const divisaoValoresArray = valoresArrayOriginal[i]/10
    console.log(divisaoValoresArray) 

  }
}
imprimeArrays(valoresArrayOriginal)

/*c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original 
e **imprima** esse novo array
*/

const valoresArrayOriginal = [5, 10, 15, 20, 25, 30]

function imprimeArrays (array){
  const novoArray = []
  for(let i = 0; i < valoresArrayOriginal.length; i++ ){
    if(valoresArrayOriginal[i] % 2 == 0){
      novoArray.push(valoresArrayOriginal[i])
    }
  }
  console.log(novoArray)
}
imprimeArrays(valoresArrayOriginal)

/*
d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: 
"O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.
*/



/*
e) Escreva um programa que imprima no console o maior e o menor números contidos no array original
*/