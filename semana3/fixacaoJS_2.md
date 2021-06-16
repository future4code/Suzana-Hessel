```
function calculaPrecoTotal(quantidade) {
  const preco1Maca = 1.30
  const preco2Maca = 1.00

    if(quantidade < 12){
      console.log(`O custo total da compra é:  R$ ${quantidade * preco1Maca} - Preço sem desconto`)
      return (quantidade * preco1Maca)

    }else if (quantidade >= 12){
      console.log(`O custo total da compra é:  R$ ${quantidade * preco2Maca} - Preço com desconto`)
      return (quantidade * preco2Maca)
      }
  }
  calculaPrecoTotal(5)

```