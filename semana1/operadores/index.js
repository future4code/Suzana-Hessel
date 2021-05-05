// Exercícios de interpretação de Código

/* 1.

Inicialmente foram declaradas em const as variáveis bool1, bool2, e bool3 que retornam valores boleanos que são,
respectivamente, true, false e !bool2 = true.
Em seguida, é declarada a variável resultado em let, para quatro situações diferentes, que são:

a. bool1 && bool2, no qual é impresso no console o resultado = false

b. bool1 && bool2 && bool3, no qual é impresso no console o resultado = false

c. !resultado && (bool1 || bool2), no qual é impresso no console o resultado = true

d. console.log("d. ", typeof resultado), nesse caso o programa vai imprimir o tipo do ultimo resultado
que vai ser do tipo booleano.
*/

/*2.

No programa em questão, os números são retornados como string, e será impresso na tela
apenas a junção dos números e não a soma.
Por exemplo, se o user digitar 1 e 1, o resultado será 11.
Portanto, para que o programa funcione é necessário efetuar a conversão de string para number.
*/

/* 3.

Para que o programa imprima a soma de dois números é necessária a conversão de string para number, 
podendo ser re-escrito da sequinte forma:

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = Number(primeiroNumero) + Number(segundoNumero)

console.log(soma)
*/

//Exercícios de escrita de Código

//1.a)

const ageUser = prompt("Qual a sua idade?")

//1.b)

const ageFriend = prompt("Qual a idade do seu melhor amigo ou amiga?")

//1.c)

console.log('Sua idade é maior do que a do seu melhor amigo?', Number(ageUser) > Number(ageFriend))

//1.d)

const subtraction = Number(ageUser) - Number(ageFriend)
console.log('diferença =', subtraction)

//2.a)

const numberPair = prompt ("Insira um número par")

//2.b)

console.log(Number(numberPair) % 2)

//2.c) Sim, o resto é sempre zero, pois estamos utilizando número par.


/*2.d) 
Ao inserir um número ímpar o resultado seria diferente de zero.
Por exemplo, se digitar o  5, o resultado é 1.
*/

//3.

const newAgeUser = prompt("Qual sua idade em anos?")

//a)

console.log('Sua idade em meses =', Number(newAgeUser) * 12)

//b)

console.log('Sua idade em dias= ', Number(newAgeUser) * 365)

//c)

console.log('Sua idade em horas= ', Number(newAgeUser) * 8760)

// 4. 

const firstNumber = prompt("Digite um número inteiro")
const secondNumber = prompt("Digite outro número inteiro")

console.log('O primeiro numero é maior que segundo? =', Number(firstNumber) > Number(secondNumber))
console.log('O primeiro numero é igual ao segundo? =', Number(firstNumber) == Number(secondNumber))
console.log('O primeiro numero é divisível pelo segundo? =', (Number(firstNumber) % Number(secondNumber)) === 0)
console.log('O segundo numero é divisível pelo primeiro? =', (Number(secondNumber) % Number(firstNumber)) === 0)
