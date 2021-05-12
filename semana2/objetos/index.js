//- **Exercícios de interpretação de código**
/*
Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, 
pode rodar no seu computador **para analisar e pensar sobre o resultado.** 

1.  Leia o código abaixo

    const filme = {
        nome: "Auto da Compadecida", 
        ano: 2000, 
        elenco: [
            "Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
            "Virginia Cavendish"
            ], 
        transmissoesHoje: [
            {canal: "Telecine", horario: "21h"}, 
            {canal: "Canal Brasil", horario: "19h"}, 
            {canal: "Globo", horario: "14h"}
            ]
    }

    console.log(filme.elenco[0])
    console.log(filme.elenco[filme.elenco.length - 1])
    console.log(filme.transmissoesHoje[2])


    a) O que vai ser impresso no console?

    Vai ser impresso no console o primeiro integrante  (índice 0) do elenco Auto da Compadecida, Matheus Nachtergaele,
    em seguida, o último integrante do elenco (índice 3) e por último, o canal e horário, que o filme será transmitido,
    que no caso é: Canal Globo, as 14h.


2. Leia o código abaixo

    const cachorro = {
        nome: "Juca", 
        idade: 3, 
        raca: "SRD"
    }

    const gato = {...cachorro, nome: "Juba"}

    const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

    console.log(cachorro)
    console.log(gato)
    console.log(tartaruga)
   

    a) O que vai ser impresso no console?

    Vai ser impresso no console todas as informações do cachorro, nome, idade e raça, as informações do gato que são uma cópia dos
    dados do cachorro, modificando apenas o nome Juca, por Juba, e as informações da tartaruga que são uma cópia
    das informações do gato, modificando apenas a ultima letra do nome Juba, ficando Jubo.

    b) O que faz a sintaxe dos três pontos antes do nome de um objeto?

    A síntase dos três pontos se chama spread e é utilizada para copiar as propriedades de um objeto.


3. Leia o código abaixo

    
    function minhaFuncao(objeto, propriedade) {
        return objeto[propriedade]
    }

    const pessoa = {
      nome: "Caio", 
      idade: 23, 
      backender: false
    }
    
    console.log(minhaFuncao(pessoa, "backender"))
    console.log(minhaFuncao(pessoa, "altura"))
    

    a) O que vai ser impresso no console?

    Vai ser impresso no console a informação que diz se a pessoa é backender, que no caso é false,
    e deveria ser impresso a altura da pessoa, porém não foi definida essa informação, então vai aparecer
    undefined.

    b) Explique o valor impresso no console. Você sabe por que isso aconteceu?

    Undefined foi impresso, pois não foi definida a propriedade altura do objeto.
    */
        
    /*
    Exercícios de escrita de código

    1. Resolva os passos a seguir: 
    
    const pessoa = {

        nome: "Suzana",]
        apelidos: ["Su", "Naninha", "Zana"]
    }

    console.log(" E sou Suzana, mas pode me chamar de: " + pessoa.apelidos[0] + pessoas.apelidos[1] + "ou" + pessoas.apelidos[2]

    */
   
    const pessoa = {

        nome: "Suzana",
        apelidos: ["Su", "Naninha", "Zana"]
    }

    const meusApelidos = (objeto) => {
        console.log("Eu sou " + objeto.nome + ", mas pode me chamar de: " + objeto.apelidos[0] + ", " + objeto.apelidos[1] + " ou " + objeto.apelidos[2])
    }

   meusApelidos(pessoa)

   /*
   b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, 
   chame a função feita no item anterior passando como argumento o novo objeto.

   */
        
   const novaPessoa = {...pessoa, apelidos: ["Bananinha", "Susu", "Nana"]}

   meusApelidos(novaPessoa)

   /*

   2. Resolva os passos a seguir: 

    a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 
*/

const pessoa1 = {

    nome: "Harry",
    idade: 17,
    profissão: "Bruxo"
}

const pessoa2 = {...pessoa1, nome: "Roni"}

/*
    b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:

    1. O valor de `nome`
    2. O numero de caracteres do valor `nome`
    3. O valor de `idade`
    4. O valor de `profissão`
    5. O numero de caracteres do valor `profissão`
    - Exemplo

        const pessoa = {
        	nome: "Bruno", 
          idade: 23, 
        	profissao: "Instrutor"
        }

        minhaFuncao(pessoa)

        // Retorno: ["Bruno", 5, 23, "Instrutor", 9]

   */

        function infoHarryPotter(obj1, obj2){
            const arrayHp = [obj1.nome, obj1.nome.length, obj1.idade, obj1.profissão, obj1.profissão.length,
                             obj2.nome, obj2.nome.length, obj2.idade, obj2.profissão, obj2.profissão.length
            
            ]
            return arrayHp
        }
        infoHarryPotter(pessoa1, pessoa2)
       
/*  3.

a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`
*/

const carrinho = []


//b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)

const frutasSacolao1 = {
    nome: "Mamão",
    disponibilidade: true
}

const frutasSacolao2 = {
    nome: "Pêra",
    disponibilidade = false
}

const frutasSacolao3 = {
    nome: "Caqui",
    disponibilidade: true
}

/*
c) Crie uma função que receba um objeto fruta por parâmetro e coloque-a dentro do array de carrinho.
 Invoque essa função passando os três objetos criados.  */

 function frutasSacolao(fruta){
    return carrinho.push(fruta)

 }

 frutasSacolao(frutasSacolao1)

