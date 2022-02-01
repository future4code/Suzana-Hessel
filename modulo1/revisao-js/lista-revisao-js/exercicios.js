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

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

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