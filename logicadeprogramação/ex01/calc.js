const NumeroUm = prompt('Informe o primeiro numero');
const NumeroDois = prompt('Informe o segundo numero');

const x = +NumeroUm
const y = +NumeroDois

const soma = x + y
const subtracao = x - y
const multiplicacao = x * y
const divisao = x / y

alert(
  "Resultados:\n" +
  "\nSoma: " + soma +
  "\nSubtração: " + subtracao +
  "\nMultiplicação: " + multiplicacao +
  "\nDivisão: " + divisao
)
