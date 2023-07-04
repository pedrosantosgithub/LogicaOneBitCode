const metros = parseFloat(prompt('Escolha quantos metros serão convertidos'))
const medidas = prompt('Escolha uma medida em qual vai ser convertida(Em alternativas)\nA)mm\nB)cm\nC)dm\nD)dam\nE)hm\nF)km')
const medidasConvertidas = medidas.toUpperCase();

let resultado;



switch(medidasConvertidas){
  case 'A':
    resultado = metros * 1000;
    alert(`A medida de ${metros} metros em milímetros, é igual a: ${resultado} milimetros`)
    break;
  case 'B':
    resultado = metros * 100;
    alert(`A medida de ${metros} metros em centímetros, é igual a: ${resultado} centimetros `)
    break;
  case 'C':
    resultado = metros * 10 
    alert(`A medida de ${metros} metros em decímetros, é igual a: ${resultado} decimetros`)
    break
  case 'D':
    resultado = metros / 10 
    alert(`A medida de ${metros} metros em decâmetros, é igual a: ${resultado} decâmetros`)
    break
  case 'E':
    resultado = metros / 100
    alert(`A medida de ${metros} metros em hectômetros, é igual a: ${resultado} hectômetros`) 
    break
  case 'F':
    resultado = metros / 1000
    alert(`A medida de ${metros} metros em quiômetros , é igual a: ${resultado}quilômetros`)
    break

    default:
      alert('Opção invalida...');
}