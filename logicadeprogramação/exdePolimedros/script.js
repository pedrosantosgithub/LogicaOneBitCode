const palavra = prompt('Escolha uma palavra e vericaremos se é um Palíndromo ou não:') 
let palavraInvertida = ""
/*Aqui criei duas variaveis para armazenar a palavra e a palavra invertida*/


for (let i = palavra.length - 1; i >= 0; i--)
/*
Criei outra varivael onde começara executando da ultima posição da palavra (let i = palavra.length)
Enquanto o i for maior ou igual a 0 continuara executando (i >= 0)
e ele ira diminuir um até chegar a 0 (i--)
*/
{
  palavraInvertida += palavra[i]
} 
/*Contetanação invertendo a palavra */

if(palavra === palavraInvertida)/* Se a palavra for igual a palavra invertida irá executar*/{
  alert(`${palavra} é um políndromo`)
} else /*Se a palavra não for igual a palavra invertida irá executar e mostra-la ao contrario*/ {
  alert(`${palavra} não é um políndromo \n
  essa palavra invertida é igual a ${palavraInvertida}`)
}