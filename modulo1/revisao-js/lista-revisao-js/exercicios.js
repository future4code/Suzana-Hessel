// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   const tamanhoArray = array.length
   console.log(tamanhoArray)
   return tamanhoArray
}
retornaTamanhoArray(["Azul", "Amarelo", "Vermelho"])

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  const inverteArray = array.reverse()
  console.log(inverteArray)
  return inverteArray
}
retornaArrayInvertido([1,2,5,8,7,10])

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    const ordenaArray = array.sort(function (a, b) {
        return a - b })
    console.log(ordenaArray)
    return ordenaArray
}
retornaArrayOrdenado([36,12,56,7,3])

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  const numerosPares = []
  for(i = 0; i < array.length; i++){
      if(array[i] % 2 == 0){
        numerosPares.push(array[i])
      }
  }
  console.log(numerosPares)
  return numerosPares
}
retornaNumerosPares([1,2,3,4,6])

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {

 const paresElevadosADois = []

 for(i = 0; i < array.length; i++){
     if(array[i] % 2 === 0) {
         paresElevadosADois.push(array[i] ** 2)
     }
 }
 return paresElevadosADois
}
retornaNumerosParesElevadosADois([1,2,3,4,5,6])

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  const maiorNumArray = array.reduce(function(a, b){
    return Math.max(a, b)
  })
  console.log(maiorNumArray)
  return maiorNumArray
}
retornaMaiorNumero([2,50,10])

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    const maiorNumero = Math.max(num1, num2)
    const menorNumero = Math.min(num1, num2)
    const maiorDivisivelPorMenor = maiorNumero % menorNumero === 0 
    const diferenca = maiorNumero - menorNumero

    console.log( `Maior número: ${maiorNumero}, MaiorDivisivelporMenor: ${maiorDivisivelPorMenor},diferenca: ${diferenca}`)

    return maiorNumero, maiorDivisivelPorMenor, diferenca
}
retornaObjetoEntreDoisNumeros(10, 3)

// EXERCÍCIO 08
// function retornaNPrimeirosPares(n) {
//    const nNumerosPares = []
//    for(let i = 0; i < nNumerosPares.length < n; i++){
//        if(i % 2 === 0){
//            nNumerosPares.push(i)

//        }
//    }
//    return nNumerosPares
// }
// console.log(retornaNPrimeirosPares(3))

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
   
    if((ladoA === ladoB) && (ladoB === ladoC)){
        return `Equilátero`
    }
    else if(ladoA === ladoB != ladoC){
        return "Isósceles"
    }
    else if(ladoA != ladoB != ladoC){
        return "Escaleno"
    }

}
console.log(classificaTriangulo(1,3,2))

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    
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
    retornaSegundoMaiorESegundoMenor([1,2,3,4,5,6,7])

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}