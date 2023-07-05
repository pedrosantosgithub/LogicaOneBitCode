let opção = ""
do {
  opção = prompt(
    "Seja bem vindo(a)!\n" +
    "\n1 - Opção Um" + 
    "\n2 - Opção Dois" +
    "\n3 - Opção Três" +
    "\N4 - Opção Quatro" +
    "\n5 - Opção Cinco - Encerrar"
  )

  switch(opção){
    case "1": alert('Você escolheu a opção um')
    break
    case "2": alert('Você escolheu a opção dois')
    break
    case "3": alert('Você escolheu a opção três')
    break
    case "4": alert('Você escolheu a opção quatro')
    break
    case "5": alert('Encerrando o programa...')
    break
    default:
      alert('Entrada invalida! Escolha uma das cinco opções')
  }
} while(opção !== "5")