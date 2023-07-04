const nome = prompt('Qual é o seu nome?')
let visita = prompt('Você ja visitou?\na)Sim\nb)Não')
let cidades = ''
let quantidadeDeCidades = 0

while(visita === 'Sim'){
  let cidade = prompt('Qual o nome da cidade?')
  cidades += "-" + cidade + "\n"
  quantidadeDeCidades++
  visita = prompt('Você ja visitou alguma outra cidade?\na)Sim\nb)Não')
} 
alert(`Você visitou ${quantidadeDeCidades} cidades são elas: \n ${cidades}`)
