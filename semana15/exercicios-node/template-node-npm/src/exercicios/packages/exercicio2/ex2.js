/*2. Crie uma aplicação Node que recebe uma string 
representando uma operação matemática e dois valores numéricos. 
O retorno deverá ser o resultado da operação 
selecionada utilizando os 2 valores fornecidos.*/

const operacao = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])

switch(operacao){
    case "add":
        console.log(`Resposta: ${num1 + num2}`)
        break;
    case "sub":
        console.log(`Resposta: ${num1 - num2}`)
        break;
    case "mult":
        console.log(`Resposta: ${num1 * num2}`)
        break;
    case "div":
        console.log(`Resposta: ${num1 / num2}`)    
        break
    default:
        console.log(`Digite add para soma, sub para subtração, mult para multiplicação ou div para divisão!`)
}


