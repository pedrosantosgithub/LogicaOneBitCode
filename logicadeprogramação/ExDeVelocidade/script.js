const CarroNomeUm = prompt('Qual o nome do primeiro carro?')
const CarroVelUm = prompt('Qual é a velocidade do primeiro carro')

const CarroNomeDois = prompt('Qual é o nome do segundo carro?')
const CarroVelDois = prompt('Qual é a velocidade do segundo carro?')

if(CarroVelUm > CarroVelDois){
  alert(`A velocidade do carro ${CarroNomeUm} de ${CarroVelUm}KM/h é maior do que a do carro 
  ${CarroNomeDois} de ${CarroVelDois}Km/h`)
}else if(CarroVelDois > CarroNomeUm ){
  alert(`A velocidade do carro ${CarroNomeDois} de ${CarroVelDois}KM/h é maior do que a do carro 
  ${CarroNomeUm} de ${CarroVelUm}Km/h`)
} else {
alert(`A velocidade do ${CarroNomeUm} e do ${CarroNomeDois} são de ${CarroVelUm}`)
}

