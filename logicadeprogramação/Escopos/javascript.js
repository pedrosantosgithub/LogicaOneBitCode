let pokemon = "Charmander"

function evoluir(){
  pokemon = "Charmeleon"
}

console.log(pokemon)
evoluir()
console.log(pokemon)

/*
====== COMO NÃO FAZER ========
function criarAnimal(){
  let animal = "Gato" >>> Não criar escopo dentro da function <<
}
criarAnimal()
console.log(animal)*/

function avaliarNota(nota){
  if (nota > 60){
    var aprovado = true // var fica disponivel em escopos mais internos apenas em if else etc
    let situacao = "Aprovado"
  } else {
    var aprovado = false
    let situacao = "Reprovado"
  }
  //console.log(nota)
  //console.log(aprovado)
  //console.log(situacao)
}
//avaliarNota(83)
// avaliarNota(49)


function ola(){
  var texto = "Ola, Mundo!" // Ele nao fica disponivel quando nao esta em outros escopos
}
// console.log(texto)

// Geralmente não se usa var e sim let


console.log(nome)
console.log(sobrenome)

var nome = "Isaac"
let sobrenome = "Santos"

console.log(nome)
console.log(sobrenome )


