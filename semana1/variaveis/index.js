// Exercício de Interpretação

/* 1. Inicialmente são declaradas em let, duas variáveis a e b = 10.
Depois, imprime o valor de b no terminal. 
Em seguida, o valor de b é alterado para 5. 
E por último, imrpime os dois valores, de a e b no terminal, ou seja, 10 e 5.
*/

/* 2. Foram declaradas as variáveis a =10, b=20 e c,  em let.
Depois atribuiu-se um valor para c, sendo c=a, reatribuiu-se valores para b e a, sendo b = c e a = b.
Por último, os valores de a, b e c, foram impressos no terminal ou tela. 
*/

/* 3. O programa em questão lê quantas horas o usuário trabalha por dia e quanto ele recebe por dia. 
e por último, alerta o usuário com o valor que ele recebe por hora, a partir dos valores fornecidos peolo usuário.
Uma forma melhor de nomear as variáveis, seria:

let horasPorDia = prompt ("Quantas horas você trabalha por dia?")
let salarioPorDia = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${salarioPorDia/horasPorDia} por hora`)
*/

// Exercícios de escrita de código

// 1. a)

const nome = prompt("Digite seu nome")

//b)

let idade = prompt("Digite sua idade")

//c)

console.log(typeof nome)
console.log( typeof idade)

/*d) Foi impresso o tipo string nas duas variáveis (nome e idade), pois tudo que se insere em um prompt é uma string. 
Para obter um tipo diferente é necessário efetuar a conversão. */ 

//e)

const novoNome = nome

let novaIdade = idade

console.log(novoNome, novaIdade)

//f)

console.log(typeof novoNome, typeof novaIdade)

//Surgiu novamente o tipo string


//g) 

alert(`Olá ${nome} você tem ${idade} anos `)

//2. 

const pergunta1 = prompt("Você está usando uma roupa azul hoje?")
const pergunta2 = prompt("Você está usando uma roupa verde hoje?")
const pergunta3 = prompt("Você está usando uma roupa vermelha hoje?")

//a)

let resposta1 = pergunta1
let resposta2 = pergunta2
let resposta3 = pergunta3

//b)

console.log(`Você está usando uma roupa azul hoje? ${resposta1} `)
console.log(`Você está usando uma roupa verde hoje? ${resposta2} `)
console.log(`Você está usando uma roupa vermelha hoje? ${resposta3} `)

//3.

let a = 10
let b = 25
let c

c = a
a = b 
b = c 

console.log(a,b)