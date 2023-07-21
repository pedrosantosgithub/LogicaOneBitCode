const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr)
// Adicionar elementos 
// push 
// adiciona no final

let tamanho = arr.push("Boromir")
console.log(arr)
console.log(tamanho)

// unshifit
// adiciona no começo

tamanho = arr.unshift("Teste")
console.log(arr)
console.log(tamanho)

// Remover Elemento
// pop

let ultElemento = arr.pop()
console.log(arr)
console.log(ultElemento)

// Remover no começo
// shift

ultElemento = arr.shift()
console.log(arr)
console.log(ultElemento)

// Pesquisar por um Elemento
// includes
const inclui = arr.includes("Gandalf")
console.log(inclui)

// indexOf
// Saber qual é o indice desse elemento

const indice = arr.indexOf("Gandalf")
console.log(indice)

// Cortar e concatenar
// slice

const cortar = arr.slice(0, 4)
const outros = arr.slice(-4)
console.log(arr)
console.log(cortar)
console.log(outros)

// concatenar - concat
const sociedade =  cortar.concat(outros, "Boromir")
console.log(sociedade)

// Substituição de Elementos
// splice
const elementosRemovidos = sociedade.splice(indice,1,"Gandalf, o cinzento")
console.log(sociedade)
console.log(elementosRemovidos)

//Iterar sobre os Elementos
for(let indice = 0; indice < sociedade.length; indice++){
  const elementos = sociedade[indice]
  console.log(elementos + "se encontra na posição " + indice)
}