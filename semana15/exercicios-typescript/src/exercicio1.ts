//a)

/*Se atribuir um number a um tipo string, o programa não roda,
 mas se atribuir esse number em forma de string "", 
 o programa roda, ou seja, a varável é do tipo string, então 
 tem que atribuir um valor do tipo string.
*/
const minhaString : string = "Suzana"

console.log(minhaString)

//b)

/*Podemos declarar a variável utilizando union type, para que a variável 
aceite os dois tipos.*/ 

const meuNumero : number | string = 28

console.log(meuNumero)

//c)

type pessoa ={
    nome: string,
    idade: number,
    corFavorita: string
}
const suzana : pessoa = {
nome: "Suzana",
idade: 28,
corFavorita: "roxo"
}

const astrodev: pessoa = {
nome: "Astrodev",
idade: 30, 
corFavorita: 'laranja',
}

const botinho : pessoa = {
nome: "Bot",
idade: 30, 
corFavorita: 'gray',
}

console.log(suzana, botinho, astrodev)


//d)

