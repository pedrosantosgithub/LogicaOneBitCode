let numeroTabuada = parseInt(prompt('Escolha um numero entre 1 a 20'))
/*Pergunta inicial. ja incluido que sempre sera um numero inteiro (parseInt)*/

while(numeroTabuada >=21){
  alert(numeroTabuada = parseInt(prompt('Escolha um numero APENAS entre 1 a 20')))} 
  /*Enquanto for digitado um numero maior ou igual a 21 será feito a pergunta*/

for(let i = 0; i <= 10; i++) 
/* 
Criei uma variavel que será o multiplicador (let i = 0)
Determinei que a varivavel so vai ser menor ou igual a 10 (i <= 10)
Enquanto ele for menor ou igual a 10 ele vai adicionar um numero (i++)
*/
{
  alert(`${numeroTabuada} * ${i} = ${numeroTabuada * i}`) 
  /* o numero digitado no começo do codigo(numeroTabuada) vezes o multiplicador (i), que sempre aumenta, vai ser igual ao resultado.*/
} 
