function exibirMenu() {
  return prompt(`a) Lista vagas disponíveis\n b) Criar uma nova vaga \n c) Visualizar uma vaga \n d) Inscrever um candidato em uma vaga \n e) Excluir uma vaga \n f) Sair `);
}

const vagas = []; // Criei um array para armazenar as vagas fora das funções

function criarVaga() {
  const nomeVaga = prompt("Digite o nome da vaga:");
  const descricaoVaga = prompt("Digite a descrição da vaga:");
  const dataLimite = prompt("Digite a data limite da vaga:");

  const vaga = {
    nomeVaga: nomeVaga,
    descricaoVaga: descricaoVaga,
    dataLimite: dataLimite,
    inscritosVaga: []
  };

  vagas.push(vaga);
  console.log("Vaga criada com sucesso!");
}

function exibirLista() {
  for (let indice = 0; indice < vagas.length; indice++) {
    alert(`Vaga: ${indice + 1}:\n Vaga: ${vagas[indice].nomeVaga}\n Descrição:${vagas[indice].descricaoVaga}\n Data limite: ${vagas[indice].dataLimite}`);
  }
}

function visualizarVaga() {
  const visuVaga = prompt("Qual é o índice da vaga na fila?");

  if (!isNaN(visuVaga) && visuVaga >= 1 && visuVaga <= vagas.length) {
    const indice = visuVaga - 1;
    const vagaSelecionada = vagas[indice];

    alert(`Nome da Vaga: ${vagaSelecionada.nomeVaga}\nDescrição: ${vagaSelecionada.descricaoVaga}\nData Limite: ${vagaSelecionada.dataLimite}\nInscritos na vaga: ${vagaSelecionada.inscritosVaga.length}`);
  } else {
    alert("Índice de vaga inválido.");
  }
}

function inscreverVaga() {
  const visuVaga = prompt("Qual é o índice da vaga na fila?");

  if (!isNaN(visuVaga) && visuVaga >= 1 && visuVaga <= vagas.length) {
    const indice = visuVaga - 1;
    const vagaSelecionada = vagas[indice];

    const candidato = prompt("Qual é o nome do candidato?");

    // Adiciona o candidato à vaga
    vagaSelecionada.inscritosVaga.push(candidato);

    alert(`Candidato ${candidato} inscrito com sucesso na vaga ${vagaSelecionada.nomeVaga}.`);
  } else {
    alert("Índice de vaga inválido.");
  }
}

function excluirVaga() {
  const removerVaga = prompt("Qual é o índice da vaga?");
  const indice = removerVaga - 1;

  if (indice >= 0 && indice < vagas.length) {
    vagas.splice(indice, 1);
    alert(`Vaga removida com sucesso.`);
  } else {
    alert("Índice de vaga inválido.");
  }
}

function iniciar() {
  let opcao = "";
  do {
    opcao = exibirMenu();

    switch (opcao) {
      case 'a':
        exibirLista();
        break;
      case 'b':
        criarVaga();
        break;
      case 'c':
        visualizarVaga();
        break;
      case 'd':
        inscreverVaga();
        break;
      case 'e':
        excluirVaga();
        break;
      case 'f':
        alert("Saindo...");
        break;
      default:
        alert("Opção inválida. Tente novamente.");
    }
  } while (opcao !== 'f');
}

iniciar();
