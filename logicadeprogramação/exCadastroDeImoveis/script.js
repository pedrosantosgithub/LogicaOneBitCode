let menu = "";
let listaImoveis = [];
let imovel = {};

alert('Bem-Vindo ao Cadastro de Imóveis');

do {
    menu = prompt(`${listaImóveis.length} imóveis cadastrados\nEscolha uma das opções abaixo:\n
        a) Adicionar Imóvel\n
        b) Mostrar imóveis cadastrados\n
        c) Sair`
    );

    switch(menu) {
        case "a":
            let prop = prompt('Qual é o Proprietário');
            let quart = prompt('Quantos quartos possui?'); // Não redeclare quart
            let banh = prompt('Quantos Banheiros?'); // Não redeclare banh

            if (
                typeof prop === 'string' && prop.length >= 1 &&
                !isNaN(quart) && !isNaN(banh)
            ) {
                imovel = { proprietario: prop, quarto: quart, banheiro: banh };
                listaImoveis.push(imovel);
                console.log(listaImoveis);
                alert('Imóvel cadastrado');
            } else {
                alert('[ERROR] As caixas estão vazias ou contêm valores incorretos!');
            }
            break;

        case "b":
            listaImoveis.forEach((item) => {
                console.log(item.proprietario, item.quarto, item.banheiro);
                alert(`Proprietário: ${item.proprietario}\nQuartos: ${item.quarto}\nBanheiros: ${item.banheiro}`);
            });
            break;

        case "c":
          alert('Encerrando programa....')
            break;

        default:
            alert('Opção Inválida');
    }
} while(menu !== "c");
