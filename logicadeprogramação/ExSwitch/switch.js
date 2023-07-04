const resultado = prompt("Escolha uma alternatica:\na)1\nb)2\nc)3\nd) 4")
const resultadoFinal = parseFloat(resultado)
switch(resultadoFinal) {
  case 1: 
  alert("O resultado é 'A' ")
  case 2: 
  alert("O resultado é 'B'")
  case 3: alert("O resultado é 'C'")
    break
  default:
    alert("Finalizando..")
}