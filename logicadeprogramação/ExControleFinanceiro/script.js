let dinheiroAtual = parseFloat(prompt('Quanto dinheiro você possui?'))
let pergunta = ""
let adicionar = 0
let remover = 0


do{
  alert(`Você possui ${dinheiroAtual}$`)
  pergunta = prompt('Oque você deseja?\na)Adicionar Dinheiro\nb)Remover\nc)Fechar programa ')
  switch(pergunta){
    case "a": adicionar = prompt('Quanto dinheiro deseja adicionar?')
    dinheiroAtual = Number(dinheiroAtual) + Number(adicionar)
    break
    case "b": remover = prompt('Quanto dinheiro deseja remover?')
    if(remover > dinheiroAtual){alert('[ERROR] - Você não consegue tirar um dinheiro que você não possui!')}
    else{dinheiroAtual = Number(dinheiroAtual) - Number(remover)}
    break
    case "c": prompt('Encerrando o programa...')
    break
    default: "Nenhum dos valores corresponde"
  }

} while(pergunta !== "c")