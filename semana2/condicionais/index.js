//Exercícios de interpretação de código

/* 1.Leia o código abaixo:

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

a) Explique o que o código faz. Qual o teste que ele realiza? 

O código tem uma estrutura condicional, no qual pede ao usuário um número
para testar se ele é par. Se for par, o resultado é "Passou no teste", senão
" Não passou no teste."

b) Para que tipos de números ele imprime no console "Passou no teste"? 

Números pares.

c) Para que tipos de números a mensagem é "Não passou no teste"?

Números ímpares.

2. O código abaixo foi feito por uma pessoa desenvolvedora, 
contratada para automatizar algumas tarefas de um supermercado:

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

a) Para que serve o código acima?

O código acima serve para ler a fruta escolhida pelo usuário e 
o preço correspondente. Se a fruta escolhida pelo usuário for diferente 
do que está listado, o preço será 5.

b) Qual será a mensagem impressa no console, 
se o valor de fruta for `"Maçã"`?

"O preço da fruta Maçã é R$ 2.25

c) Considere que um usuário queira comprar uma `Pêra`,
qual seria a mensagem impressa no console se retirássemos o 
`break` que está logo acima do `default` (o `break` 
indicado pelo comentário "BREAK PARA O ITEM c.")?

Se retirar o `break`, o programa continua a execução para a próxima
instrução dentro do switch e iria direto para o default, não lendo 
o preço da Pêra, já que o `break` garante que o programa saia da condicional
switch assim que a instrução correspondente for executada, e executa a
instrução que segue logo após o switch. 

3. Leia o código abaixo:

const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
    let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

a) O que a primeira linha está fazendo?

Declarou-se uma variável em const, no qual foi pedido para o usuário digitar
um número. A String foi convertida para Number.

b) Considere que um usuário digitou o número 10. Qual será a mensagem do terminal? 
E se fosse o número -10?

Caso o usuário digite 10, a mensagem impressa é: "Esse número passou no teste". 
Caso o usuário digite -10, não terá mensagem impressa, pois não foi adicionado um else.

c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.

Sim, pois a variável mensagem não foi declarada no escopo global, por isso ela não pode ser
chamada fora do escopo onde foi declarada.
*/

//Exercícios de escrita de código

/*1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console 
se ele/ela pode dirigir (apenas maiores de idade).

a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
*/

//const idadeUsuario = prompt("Digite sua idade"

/*
b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
*/

const idadeUsuario = Number(prompt("Digite sua idade"))


/*
c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. 
Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."
*/

if(idadeUsuario >= 18){
    console.log("Você pode dirigir")
}else{
    console.log("Você não pode dirigir.")
}

/*2.Agora faça um programa que verifica que turno do dia um aluno estuda. 
Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). 
Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". 
Utilize o bloco if/else
*/

const turnoAluno = prompt("Qual turno você estuda? Digite M para matutino, V para vespertino, ou N para noturno")

if (turnoAluno === "M"){
    console.log("Bom dia!")
}else if(turnoAluno === "V"){
    console.log("Boa Tarde!")
}else if(turnoAluno === "N"){
    console.log("Boa Noite!")
    }

/*
3. Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

*/

const turnoAluno = prompt("Qual turno você estuda? Digite M para matutino, V para vespertino, ou N para noturno")

switch(turnoAluno){
    case 'M':
        console.log("Bom dia!")
        break
    case "V":
        console.log("Boa Tarde!")
        break
    case"N": 
        console.log("Boa Noite!")
        break
    default:
        console.log("Turno não encontrado")
        break
    }

/*
4. 
Considere a situação: você vai ao cinema com um amigo ou amiga, 
porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia
e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário
qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, 
então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem:
"Bom filme!", caso contrário, imprima "Escolha outro filme :("
*/

const filmeGenero = prompt("Qual o gênero do filme que vamos assistir?")
const preçoIngresso = prompt("Qual o preço do ingresso?")

if(filmeGenero === "Fantasia" && preçoIngresso <= 15){
    console.log("Bom filme!")
}else{
    console.log("Escolha outro filme :(")
}
