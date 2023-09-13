/*function calcTria(baseTria, alturaTria) {
  alert(`${baseTria} x ${alturaTria} ÷ 2 = ${baseTria * alturaTria / 2}`);
}
=== Jeito que eu fiz ===
*/

function calcTria() {
  const base = prompt("Informe a base do triangulo")
  const altura = prompt("Informe a altura  do triangulo")
  return base * altura / 2
} // Jeito que foi feito no curso


/*function calcReta(baseReta, alturaReta) {
  alert(`${baseReta} x ${alturaReta} = ${baseReta * alturaReta}`)
  return calcReta;
} Jeito que eu fiz
*/

function calcReta(){
  const base = prompt("Informe a base do retângulo:")
  const altura = prompt("Informe a altura do retângulo:")
  return base * altura
} // Jeito da OneBitCode

/*function calcQuad(lado){
  alert(`${lado^2}`)
} Jeito que eu fiz
*/

function calcQuad(){
  const lado = prompt("Informe o lado do quadrado?")
  return lado * lado
} // Jeito da OneBitCode

/*function calcTrap(baseMaior, baseMenor, alturaTrap){
  alert(`${baseMaior * baseMenor * alturaTrap / 2 }`)
} Jeito que eu fiz
*/

function calcTrap(){
  const baseMaior = parseFloat(prompt("Informe o valor da base menor:"))
  const baseMenor = parseFloat(prompt("Informe o valor da base menor:"))
  const altura = parseFloat(prompt("Informe a altura do trapezio:"))
  return(baseMaior + baseMenor) * altura / 2
}

/*function calcPi(pi, raio){
  alert(`${pi * raio^2}`)
} Jeito que eu fiz
*/

function calcCirculo(){
  const raio = parseFloat(prompt("Infome o raio do círculo:"))
  return(3.14 * raio * raio) // Jeito da OneBitCode
}

function exibirMenu(){
  return prompt(
`Escolha uma das opções abaixo\n a) Área do triângulo\n b) Área do retângulo\n c) Área do quadrado\n d) Área do trapézio\n e) Área do círculo\n f) Sair`);

}

function executar(){
  let opcao = ""

  do {
    opcao = exibirMenu()
    let resultado

    switch(opcao){
      case "a":
        resultado = calcTria()
       break;
     case "b":
      resultado = calcReta()
       break;
     case "c":
      resultado = calcQuad()
      break;
     case "d":
      resultado = calcTrap()
     case "e":
      resultado = calcCirculo()
       break;
     case "f":
      alert('Encerrando programa....')
     break;
    }
    if(resultado){
      alert(`Resultado: ${resultado}`)
    }
  } while(opcao !== "f")
}

executar()



/* Jeito que eu fiz
do {
  menu = prompt(`Escolha uma das opções abaixo\n a) Área do triângulo\n b) Área do retângulo\n c) Área do quadrado\n d) Área do trapézio\n e) Área do círculo\n f) Sair`);

  switch (menu) {
    case "a":
       baseTria = prompt('Qual é o valor da base?');
       alturaTria = prompt('Qual é a altura?');
      calcTria(baseTria, alturaTria);
      break;
    case "b":
      baseReta = prompt('Qual é o valor da base');
      alturaReta = prompt('Qual é valor da altura');
      calcReta(baseReta, alturaReta)
      break;
    case "c":
     lado = prompt('Qual é o valor do lado?')
     calcQuad(lado)
     break;
    case "d":
     baseMaior = prompt('Qual é o valor da base maior?')
     baseMenor = prompt('Qual é o valor da base menor?')
     alturaTrap = prompt('Qual é a altura do Trapézio')
     calcTrap(baseMaior, baseMenor, alturaTrap)
    case "e":
      raio = prompt('Qual é o valor do raio?')
      calcPi(pi = 3.14 , raio)
      break;
    case "f": alert('Encerrando programa....')
    break;
    default:
      alert('Escolha somente as opções que estão no menu');
  }
} while (menu !== "f");
*/