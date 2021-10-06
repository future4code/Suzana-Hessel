//Exercício 1.

const isOndeEdit = (stringA: string, stringB: string) => {

    let quantCharDiffer = 0

    if(Math.abs(stringA.length - stringB.length) > 1) {
        return false
    }

    if(stringA.length > stringB.length) {
        return stringA.includes(stringB)
    }

    if(stringB.length > stringA.length) {
        return stringB.includes(stringA)
    }

    for (let i = 0; i < stringA.length; i++) {
        if(stringA[i] !== stringB[i]) {
            quantCharDiffer++
        }
    }


    return quantCharDiffer === 1

} 

console.log(isOndeEdit("bananass", "bananak"))
console.log(isOndeEdit("escola", "escolas"))