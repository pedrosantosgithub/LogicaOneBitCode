let Cartas = ['Dama de paus', 'Rei de Espada', '4 de Paus', '7 de copas', '3 de paus'];

let quantidadeDeCartas = Cartas.length;
let menu;

do {
    alert(`Temos ${quantidadeDeCartas} cartas\n São elas: ${Cartas}`);
    menu = prompt('Qual das opções você escolhe:\nA)Remover carta da pilha\nB)Adicionar Carta na pilha\nC)Sair');
    menu.toUpperCase
    
    switch (menu) {
        case 'A':
            if (quantidadeDeCartas > 0) {
                let cartaRetirada = Cartas.pop();
                alert(`Você retirou a carta ${cartaRetirada}`);
                quantidadeDeCartas = Cartas.length;
            } else {
                alert("A pilha de cartas está vazia. Não é possível remover uma carta.");
            }
            break;

        case 'B':
            let novaCarta = prompt('Digite o nome da nova carta:');
            Cartas.push(novaCarta);
            quantidadeDeCartas = Cartas.length;
            break;

        case 'C':
            alert('Encerrando o programa.');
            break;

        default:
            alert('Opção inválida. Tente novamente.');
            break;
    }
} while (menu !== "C");
