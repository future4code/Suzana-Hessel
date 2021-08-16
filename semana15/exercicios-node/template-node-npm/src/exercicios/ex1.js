/*a) Os parâmetros são acessados por meio do process.argv, que é um array que contém 
os argumentos da linha de comando. 
O primeiro índice será 'node', é o segundo índice será o nome do arquivo JavaScript. 
Os próximos elementos serão quaisquer argumentos adicionais da linha de comando.*/

//b)


const nome = process.argv[2]
const idade = Number(process.argv[3])

console.log(`Olá, ${nome}! Você tem ${idade} anos.`)

//c)

// const nome = process.argv[2]
// const idade = Number(process.argv[3])
// const novaIdade = idade + 7

// console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${novaIdade}`)