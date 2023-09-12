function calcTria(baseTria, alturaTria) {
  alert(`${baseTria} x ${alturaTria} ÷ 2 = ${baseTria * alturaTria / 2}`);
}

function calcReta(baseReta, alturaReta) {
  alert(`${baseReta} x ${alturaReta} = ${baseReta * alturaReta}`)
  return calcReta;
}
function calcQuad(lado){
  alert(`${lado^2}`)
}
function calcTrap(baseMaior, baseMenor, alturaTrap){
  alert(`${baseMaior * baseMenor * alturaTrap / 2 }`)
}
function calcPi(pi, raio){
  alert(`${pi * raio^2}`)
}
let menu;

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
