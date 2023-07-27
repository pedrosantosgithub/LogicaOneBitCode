// Lista de espera inicial com alguns pacientes
let filaDeEspera = ['Pedro', 'Claudio', 'Lorran', 'Raphael', 'Victor', 'Ricardo'];

// Mensagem de boas-vindas
alert("Seja Bem vindo(a)\nAbrindo programa..");
alert("Está a fila de espera");

let menu;


do {
  // Exibição dos pacientes na fila de espera
  for (let posicao = 0; posicao < filaDeEspera.length; posicao++) {
    alert(`Lugar: ${posicao + 1} - ${filaDeEspera[posicao]}`);
  }

  // Exibição do menu de opções e captura da escolha do usuário
  menu = prompt('Qual das opções abaixo você quer executar\na) Consultar paciente\nb) Adicionar Paciente\nc) Sair');

  // Switch para lidar com a opção selecionada pelo usuário
  switch (menu) {
    case "a":
      // Opção "a" - Consultar paciente
      // Captura o primeiro paciente da fila
      let pacienteConsultado = filaDeEspera[0];
      // Exibe uma mensagem com o paciente consultado
      alert(`Você chamou o paciente ${pacienteConsultado}`);
      // Remove o paciente consultado da fila usando shift()
      filaDeEspera.shift();
      break;

    case "b":
      // Opção "b" - Adicionar paciente
      // Captura o nome do novo paciente inserido pelo usuário
      let pacienteNovo = prompt('Quem você deseja adicionar ao final da fila');
      // Adiciona o novo paciente à fila usando push()
      filaDeEspera.push(pacienteNovo);
      break;

    case "c":
      // Opção "c" - Sair do programa
      alert("Saindo do programa...");
      break;

    default:
      // Opção inválida (diferente de "a", "b" ou "c")
      alert("Opção inválida. Tente novamente.");
  }

} while (menu !== "c"); // Continua o loop enquanto a opção selecionada for diferente de "c"
