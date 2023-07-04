const idade = prompt('Qual sua idade?')

if(idade >= 18){
  alert("Você é adulto")
} else if (idade >= 12){
  alert("Você é menor de idade, e não pode se cadastrar!")
} else if (idade <= 4 || idade >= 5){
  alert("Você é criança")
} else{
  alert("..")
}