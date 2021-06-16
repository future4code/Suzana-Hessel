```
function calculaNota(ex, p1, p2){
  let mediaPonderada = ((1 * ex) + (2 * p1) + (3 * p2)) / 6

  if(mediaPonderada >= 9){
    console.log(`conceito A`)
    return `conceito A`
  }else if(mediaPonderada < 9 && mediaPonderada >= 7.5){
    console.log(`conceito B `)
    return `conceito B. `
  }else if(mediaPonderada < 7.5 && mediaPonderada >= 6){
    console.log(`conceito C `)
    return `conceito C. `
  }else if(mediaPonderada <  6){
    console.log(`conceito D `)
    return `conceito D.` 
  }
  console.log(calculaNota)
  return calculaNota
}

calculaNota(10, 5, 6)

```