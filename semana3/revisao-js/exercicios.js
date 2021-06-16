//Exercício 1

function inverteArray(array) {
  const novoArray = [];
  const tamanhoArray = array.length;
  for (let i = tamanhoArray - 1; i >= 0; i--) {
    novoArray.push(array[i]);
  }
  console.log(novoArray);
}
inverteArray([0, 8, 23, 16, 10, 15, 41, 12, 13]);

//Exercício 2

function retornaNumerosParesElevadosADois(array) {
  const arrayNovo = [];
  const numerosPares = array.filter((numero) => {
    return numero % 2 === 0;
  });
  for (let i = 0; i < numerosPares.length; i++) {
    arrayNovo.push(Math.pow(numerosPares[i], 2));
  }

  console.log(arrayNovo);
}
retornaNumerosParesElevadosADois([1, 2, 3, 4, 5, 6]);

//Exercício 3

function retornaNumerosPares(array) {
  const numerosPares = array.filter((numero) => {
    return numero % 2 === 0;
  });
  console.log(numerosPares);
}

retornaNumerosPares([1, 2, 3, 4, 5, 6]);

//Exercício 4

const arrayOriginal = [0, 1, 2, 3, 4, 5, 6];
function retornaMaiorNumero(array) {
  let maiorNumero = array[0];
  for (let i = 0; i < array.length; i++) {
    if (maiorNumero < array[i]) {
      maiorNumero = array[i];
    }
  }
  console.log(`O maior número é: ${maiorNumero}.`);
}
retornaMaiorNumero(arrayOriginal);

//Exercício 5

function retornaQuantidadeElementos(array) {
  console.log(`A quantidade de elemtos é: ${array.length}`);
  return array.length;
}

retornaQuantidadeElementos(arrayOriginal);

//Exercício 6

function retornaExpressoesBooleanas() {
  const valoresExpressoes = [false, false, true, true, true];
  console.log(valoresExpressoes);
  return valoresExpressoes;
}
retornaExpressoesBooleanas();

//Exercício 7

function retornaNNumerosPares(n) {
  const novoArrayN = [];
  for (let i = 0; novoArrayN.length < n; i++) {
    if (i % 2 === 0) {
      novoArrayN.push(i);
    }
  }
  console.log(novoArrayN);
}
retornaNNumerosPares([4]);

// Exercício 8

function checaTriangulo(a, b, c) {

   if (a === b && b === c) {
     console.log(`É triângulo equilatero`)
    
   } else if (a === b && b !== c) {
     console.log(`É triângulo isósceles`)
     
   } else{
      console.log(`É triângulo escaleno`)
 }
}
checaTriangulo(1, 1, 2)

// Exercício 9

function comparaDoisNumeros(num1, num2) {
   let maiorNumero
   let menorNumero
   let maiorDivisivelporMenor
   let diferenca

   if(num1 > num2){
      maiorNumero = num1
      menorNumero = num2
   }else{
      menorNumero = num1
      maiorNumero = num2
   }
  maiorDivisivelporMenor = maiorNumero % menorNumero === 0
  diferenca = maiorNumero - menorNumero

  console.log(`maiorNumero: ${maiorNumero}, maiorDivisivelporMenor: ${maiorDivisivelporMenor}, diferenca: ${diferenca}.`)

  return {
   maiorNumero: maiorNumero,
   maiorDivisivelporMenor: maiorDivisivelporMenor,
   diferenca: diferenca
}

}
comparaDoisNumeros(1, 2)

// Exercício 10

function segundoMaiorEMenor(array) {
   let menor = Infinity
   let maior = 0
   let segundoMenor = Infinity
   let segundoMaior = 0
   let indiceMenor = 0
   let indiceMaior = 0
   let arrayDoisNumeros = []
 
   for(let i of array){
     if(i < menor){
       menor = i
       indiceMenor = array.indexOf(menor)
      }
      if(i > maior){
        maior = i
        indiceMaior = array.indexOf(maior)
 
      }
   }
   array.splice(indiceMaior, 1)
   array.splice(indiceMenor, 1)
 
   for(let i of array){
     if(i < segundoMenor){
       segundoMenor = i
     }
     if(i > segundoMaior){
       segundoMaior = i
     }
   }
   arrayDoisNumeros.push(`O segundo maior é: ${segundoMaior}`)
   arrayDoisNumeros.push(`O segundo menor é: ${segundoMenor}`)
   console.log(arrayDoisNumeros)
 
   return arrayDoisNumeros
 }
 segundoMaiorEMenor([0, 2, 4, 6, 8])

// //Exercício 11 (Resposta Usando "Buble sort")

function ordenaArray(array) {
   for(let i = 0; i < array.length; i++){
     for(let j = 0; j < (array.length - i - 1); j++){
       if(array[j] > array[j + 1]){
         let temp = array[j]
       array[j]= array[j + 1]
       array[j + 1] = temp
       }
     }
   }
   console.log(array)
   return array 
 }  
 ordenaArray([28, 55, 2, 7, 20, 18, 9])

// Exercício 12

function filmeFavorito() {
  const filmeFavoritoDoAstrodev = {
   nome: "O Diabo Veste Prada",
   ano: 2006,
   diretor: "David Frankel",
   atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
  }
  console.log(`O filme favorito do Astrodev é:` , filmeFavoritoDoAstrodev)
  return filmeFavoritoDoAstrodev
}
filmeFavorito()

// Exercício 13

function imprimeChamada() {
   const filmeFavoritoDoAstrodev = {
        nome: "O Diabo Veste Prada",
        ano: 2006,
        diretor: "David Frankel",
        atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
       }
   console.log(`Venha assistir ao filme ${filmeFavoritoDoAstrodev.nome}, de ano ${filmeFavoritoDoAstrodev.ano}, dirigido por ${filmeFavoritoDoAstrodev.diretor} e estrelado por ${filmeFavoritoDoAstrodev.atores[0]}, ${filmeFavoritoDoAstrodev.atores[1]}, ${filmeFavoritoDoAstrodev.atores[2]} e ${filmeFavoritoDoAstrodev.atores[3]}. `)
   return `Venha assistir ao filme ${filmeFavoritoDoAstrodev.nome}, de ano ${filmeFavoritoDoAstrodev.ano}, dirigido por ${filmeFavoritoDoAstrodev.diretor} e estrelado por ${filmeFavoritoDoAstrodev.atores[0]}, ${filmeFavoritoDoAstrodev.atores[1]}, ${filmeFavoritoDoAstrodev.atores[2]} e ${filmeFavoritoDoAstrodev.atores[3]}. `
 }
 imprimeChamada()


// Exercício 14

function criaRetangulo(lado1, lado2) {
   const dadosRetangulo = {
      largura: lado1,
      altura: lado2,
      perimetro: (2 * (lado1 + lado2)),
      area: lado1 * lado2
   }
   console.log(`Os dados do retângulo são: largura: ${dadosRetangulo.largura} , altura: ${dadosRetangulo.altura}, perímetro: ${dadosRetangulo.perimetro} e área: ${dadosRetangulo.area} .`)
   return dadosRetangulo
 }
 criaRetangulo(4, 8)

// Exercício 15

function anonimizaPessoa(pessoa) {
   const meusDados = {
     nome: "Suzana",
     idade: 28,
     email: "suhessel28@gmail.com",
     endereco: "Rua Claudio Silveira, 411"
   }
   console.log(`nome: ${meusDados.nome.replaceAll("Suzana", "ANÔNIMO")}, idade: ${meusDados.idade}, email: ${meusDados.email} e endereço: ${meusDados.endereco}. ` )
   return `nome: ${meusDados.nome.replaceAll("Suzana", "ANÔNIMO")}, idade: ${meusDados.idade}, email: ${meusDados.email} e endereço: ${meusDados.endereco}. `
 }
 anonimizaPessoa()

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 },
];

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   const arrayDeAdultos = arrayDePessoas.filter((pessoa) => {
      return pessoa.idade >= 20
   })
   console.log(arrayDeAdultos)
   return arrayDeAdultos
}
maioresDe18


// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
  const arrayDeCriancas = arrayDePessoas.filter((pessoa) => {
     return pessoa.idade < 20
  })
  console.log(arrayDeCriancas)
  return arrayDeCriancas
}
menoresDe18

// Exercício 17, letra A

const arrayBase = [1, 2, 3, 4, 5, 6]
function multiplicaArrayPor2(array) {
  const multiplicaArray = arrayBase.map((numArray) => {
    return numArray * 2
  })
  console.log(multiplicaArray)
  return multiplicaArray
}
multiplicaArrayPor2()

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
   ArrayString = arrayBase.map((numArray) => {
     return (numArray * 2).toString()
   })
   console.log(ArrayString)
   return ArrayString
 }
 multiplicaArrayPor2S()

// Exercício 17, letra C

function verificaParidade(array) {
   const arrayParidade = arrayBase.map((numArray) => {
     if(numArray % 2 === 0){
       return `${numArray} é par`
     }else{
       return `${numArray} é impar`
     }
   })
   console.log(arrayParidade)
   return arrayParidade
 }
 verificaParidade()

// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8 },
  { nome: "João", idade: 20, altura: 1.3 },
  { nome: "Pedro", idade: 15, altura: 1.9 },
  { nome: "Luciano", idade: 22, altura: 1.8 },
  { nome: "Artur", idade: 10, altura: 1.2 },
  { nome: "Soter", idade: 70, altura: 1.9 },
];

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
  const pessoasAutorizadas = pessoas.filter((pessoas) => {
     if( 15 < pessoas.idade < 59 && pessoas.altura >= 1.5 ){
        return `${pessoas} estão autorizadas a entrar`
     }else{
        return `${pessoas} não estão autorizadas`
     }
  })
  console.log(pessoasAutorizadas)
  return pessoasAutorizadas
}
retornaPessoasAutorizadas()

// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   const pessoasNaoAutorizadas = pessoas.filter((pessoa) => {
     return pessoa.altura < 1.5 || pessoa.idade < 14 || pessoa.idade > 60 
   })
   console.log(pessoasNaoAutorizadas)
   return pessoasNaoAutorizadas
 }
 retornaPessoasNaoAutorizadas()

//Exercício 19

const consultasNome = [
  { nome: "João", dataDaConsulta: "01/10/2021" },
  { nome: "Pedro", dataDaConsulta: "02/07/2021" },
  { nome: "Paula", dataDaConsulta: "03/11/2021" },
  { nome: "Márcia", dataDaConsulta: "04/05/2021" },
];

//Exercício 19, letra A

function ordenaPorNome() {
   for(let i = 0; i < consultasNome.length; i++){
     for(let j = 0; j < consultasNome.length - i - 1; j++)
     if(consultasNome[j].nome > consultasNome[j + 1].nome){
       const temp = consultasNome[j]
       consultasNome[j] = consultasNome[j + 1]
       consultasNome[j + 1] = temp
     }
   }
   console.log(consultasNome)
   return consultasNome
 }
 ordenaPorNome()

// Exercício 19, letra B

const consultasData = [
  { nome: "João", dataDaConsulta: "01/10/2021" },
  { nome: "Pedro", dataDaConsulta: "02/07/2021" },
  { nome: "Paula", dataDaConsulta: "03/11/2021" },
  { nome: "Márcia", dataDaConsulta: "04/05/2021" },
];

function ordenaPorData() {
  }
  


//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] },
];

function atualizaSaldo() {
   contas.forEach((conta) => {
      let totalDeCompras = 0
      conta.compras.forEach((valor) => {
         totalDeCompras = totalDeCompras + valor
      })
      conta.saldoTotal = conta.saldoTotal - totalDeCompras
   })
   console.log(contas)
  return contas
}
atualizaSaldo()