//Exercícios de interpretação de código

//1. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa

/*

let array
console.log('a. ', array)

* Nesse primeiro trecho, como não foi definido uma valor em let, 
o programa retorna um valor indefinido.

array = null
console.log('b. ', array)

*Nesse segundo trecho, usou-se o termo array, porém não é um array, 
já que não contém nenhuma lista de itens agrupadas em colchete.
Então, o programa vai imprimir o valor null.

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

*Nesse terceiro trecho, temos um array, no qual o programa vai imprimir 
a quantidade de ítens dentro desse array, com o uso da propriedade length.
A quantidade de ítens vai ser 11.

let i = 0
console.log('d. ', array[i])

*Nesse quarto trecho, foi declarado em let, a posição i = 0, que considerando o array anterior,
o programa vai imprimir o valor 3, já que esse valor que está na posição 0 do array.

array[i+1] = 19
console.log('e. ', array)

*Nesse quinto trecho, foi atribuído um novo valor, 19, para a posição i+1 do array em questão,
no qual o programa vai imprimir o array completo, já com o novo valor, 19, na posição 1, 
já que i+1 = 0+1 = 1.

const valor = array[i+6]
console.log('f. ', valor)

*Nesse útimo trecho, foi declarado em const, o valor da posição i+6, do array em questão, n qual 
o programa vai imprimir o valor que está na posição i+6 desse array, sendo esse valor = 9, já que i+6= 0+6 = 6º posição.
*/

//2. Leia o código abaixo com atenção 

/*
const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?

* O método toUpperCase() transforma todas as letras de uma string em maiúsculas e o método replaceAll(chars1, chars2), 
troca todas as ocorrências de um conj. de caracteres (chars1) por outra (chars2).
Portanto, o programa vai imprimir o valor: " SUBI NUM ÔNIBUS EM MIRROCOS "
*/

//Exercícios de escrita de código

/*1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. 
Em seguida, imprima na tela a seguinte mensagem:
O e-mail emailDoUsuario foi cadastrado com sucesso. Seja bem-vinda(o), nomeDoUsuario!
*/

const userName = prompt("Qual é o seu nome?")

const userEmail = prompt("Qual é o seu e-mail?")

//console.log('O e-mail =', userEmail,' foi cadastrado com sucesso. \n' , 'Seja bem-vinda(o),', userName,'!')

//ou

const frase = 'O e-mail = ' + userEmail + ' foi cadastrado com sucesso. \n' + 'Seja bem-vinda(o), ' + userName + '!'

console.log(frase)

/*2. Faça um programa que contenha um array com 5 das suas comidas preferidas, 
armazenado em uma variável. Em seguida, siga os passos:*/

let minhasComidasPreferidas = ["Pizza", "Sushi", "Churrasco", "Queijo", "Salada"]

//a) Imprima na tela o array completo

console.log( minhasComidasPreferidas)


/*b) Imprima na tela a mensagem "Essas são as minhas comidas preferidas:
", seguida por cada uma das comidas, **uma embaixo da outra**.
*/

console.log("Essas são as minhas comidas preferidas:")
console.log(minhasComidasPreferidas[0])
console.log(minhasComidasPreferidas[1])
console.log(minhasComidasPreferidas[2])
console.log(minhasComidasPreferidas[3])
console.log(minhasComidasPreferidas[4])

/*c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. 
Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima na tela a nova lista
*/

let usuarioComidaPreferida  = prompt("Qual a sua comida preferida?")

minhasComidasPreferidas[1] = usuarioComidaPreferida 

console.log(minhasComidasPreferidas)

//3.Faça um programa, seguindo os passos:

//a) Crie um array vazio e guarde-o em uma variável, chamada listaDeTarefas

let listaDeTarefas = []

//b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

const tarefasUsuario1 = prompt("Digite a primeira tarefas que você precisa realizar hoje")
const tarefasUsuario2 = prompt("Digite a segunda tarefas que você precisa realizar hoje")
const tarefasUsuario3 = prompt("Digite a terceira tarefas que você precisa realizar hoje")
listaDeTarefas.push(tarefasUsuario1, tarefasUsuario2, tarefasUsuario3)

//c) Imprima o array na tela

console.log(listaDeTarefas)

//d) Peça ao usuário que digite o índice de uma tarefa que ele já realizou: 0, 1 ou 2 

const tarefaRealizada = prompt("Digite o índice de uma tarefas que você já realizou: 0, 1 ou 2")

//e) Remova da lista o item de índice que o usuário escolheu.

listaDeTarefas.splice(Number(tarefaRealizada), 1)

//f) Imprima o array na tela

console.log(listaDeTarefas)

