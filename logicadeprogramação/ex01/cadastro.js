let nome = window.prompt('Escreva seu nome:');
let sobrenome = window.prompt('Escreva seu sobrenome:');
let estudo = window.prompt('Qual seu campo de estudo:');
let nasc =  window.prompt('Ano de nascimento:');

alert(
  "Recruta cadastrado com sucesso!\n" +
  "\nNome completo: " + nome + " " + sobrenome +
  "\nCampo de estudo: " + estudo +
  "\nIdade: " + (2022 - nasc)
)