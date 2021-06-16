```
function calculaSalario(carrosVendidos, valorVendas) {
  let valorCarro = 1000
  let comissaoPorVenda = 100 + (0.05 * valorCarro)
  let comissaoTotal = comissaoPorVenda * carrosVendidos
  const salarioFixo = 2000
  const salarioFinal = salarioFixo + comissaoTotal
  console.log(salarioFinal)
  return salarioFinal

}
calculaSalario(10, 30000)
```