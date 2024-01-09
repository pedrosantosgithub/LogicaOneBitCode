const modalcriarTime = document.querySelector('.modal-containercriarTime');

const goleiro = document.getElementById('goleiro');
const zagueiroum = document.getElementById('zagueiroum');
const zagueirodois = document.getElementById('zagueirodois');
const zagueirotres = document.getElementById('zagueirotres');
const zagueiroquatro = document.getElementById('zagueiroquatro');
const meioum = document.getElementById('meioum');
const meiodois = document.getElementById('meiodois');
const meiotres = document.getElementById('meiotres');
const atacanteum = document.getElementById('atacanteum');
const atacantedois = document.getElementById('atacantedois');
const atacantetres = document.getElementById('atacantetres');

// Declare nomeTime fora da função para que ela seja acessível globalmente
let nomeTime;

function criarTime() {
  // Atribua o valor a nomeTime dentro da função
  nomeTime = document.getElementById('nomeTime').value;

  const jogadores = [
    goleiro.value,
    zagueiroum.value,
    zagueirodois.value,
    zagueirotres.value,
    zagueiroquatro.value,
    meioum.value,
    meiodois.value,
    meiotres.value,
    atacanteum.value,
    atacantedois.value,
    atacantetres.value
  ];


}

// ... (restante do seu código)


function abrircriarTime(){
  modalcriarTime.classList.add('active')

}

function closeModalcriarTime(){
  modalcriarTime.classList.remove('active')
}

