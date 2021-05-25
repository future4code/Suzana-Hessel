```
    function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
        let count = []
        for( let i = 0; i < arrayDeNumeros.length; i++ ){
            if(arrayDeNumeros[i] == numeroEscolhido[0]){
                count.push(arrayDeNumeros[i])
            }
        }
       if(count.length){
            console.log(`O número ${numeroEscolhido} aparece ${count.length} vezes `)
       }
        else{
            console.log(`O número escolhido não foi encontrado `)

        }
    }
    contaOcorrencias([1, 4, 8, 2, 5, 4, 10, 1, 2, 4, 7, 5] , [4])
    ```