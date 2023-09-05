let menu = "";
let listaImoveis = [];

alert("Bem-Vindo ao Cadastro de Imóveis");

do {
  menu = prompt(
    `${listaImoveis.length} imóveis cadastrados\nEscolha uma das opções abaixo:\n
a) Adicionar Imóvel
b) Mostrar imóveis cadastrados
c) Sair`
  );

  switch (menu) {
    case "a":
      let prop = prompt("Qual é o Proprietário");
      let quart = prompt("Quantos quartos possui?");
      let banh = prompt("Quantos Banheiros?");
      let garag = prompt("Possui garagem?");

      const confirmação = confirm(`
                \nSalvar este imóvel?\n
                Proprietário: ${prop}\n
                Quartos: ${quart}\n
                Banheiros: ${banh}\n
                Tem garagem?: ${garag}`);

      if (confirmação) {
        if (
          typeof prop === "string" &&
          prop.length >= 1 &&
          !isNaN(quart) &&
          !isNaN(banh)
        ) {
          const imovel = {
            proprietario: prop,
            quarto: quart,
            banheiro: banh,
            garagem: garag,
          };
          listaImoveis.push(imovel);
          console.log(listaImoveis);
          alert("Imóvel cadastrado");
        } else {
          alert("[ERROR] As caixas estão vazias ou contêm valores incorretos!");
        }
      } else if (confirmação === false) {
        alert("Você está voltando para o menu!");
      }
      break;

    case "b":
      listaImoveis.forEach((item) => {
        console.log(
          item.proprietario,
          item.quarto,
          item.banheiro,
          item.garagem
        );
        alert(`Proprietário: ${item.proprietario}\n
                Quartos: ${item.quarto}\n
                Banheiros: ${item.banheiro}\n
                Possui garagem?: ${item.garagem}`);
      });
      break;

    case "c":
      alert("Fechando o programa");
      break;

    default:
      alert("Opção Inválida");
  }
} while (menu !== "c");
