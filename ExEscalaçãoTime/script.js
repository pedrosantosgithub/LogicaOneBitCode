function resetModalContent() {
  const modal = document.querySelector('.modal-container');
  const modalContent = modal.querySelector('.modal');

  // Remova todo o conteúdo dentro do modal
  modalContent.innerHTML = '';
}

function createH3Element(text) {
  const h3 = document.createElement('h3');
  h3.textContent = text;
  return h3;
}

function criarTime() {
  resetModalContent(); // Certifique-se de fechar o modal antes de redefinir

  const modal = document.querySelector('.modal-container');
  const modalContent = modal.querySelector('.modal');

  modalContent.appendChild(createH3Element("Crie seu time"));

  const jogador = document.createElement('input');
  jogador.type = 'text';

  // Adicione o input ao modal
  modalContent.appendChild(jogador);
  modal.classList.add('active');
}

function escolherTime() {
  resetModalContent(); // Certifique-se de fechar o modal antes de redefinir

  const modal = document.querySelector('.modal-container');
  const modalContent = modal.querySelector('.modal');

  modalContent.appendChild(createH3Element("Escolha um time já criado"));

  // Adicione qualquer outro conteúdo desejado aqui
  // ...

  modal.classList.add('active');
}

function closeModal() {
  const modal = document.querySelector('.modal-container');
  const modalContent = modal.querySelector('.modal');

  // Remova todo o conteúdo dentro do modal
  modalContent.innerHTML = '';

  modal.classList.remove('active');
}
