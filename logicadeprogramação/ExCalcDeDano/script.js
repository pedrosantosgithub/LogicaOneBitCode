const PrimeiroPersonagem = prompt('Qual é o nome do seus personagens')
const PoderAtaque = parseFloat(prompt('Qual é o poder de dano do seu ataque'))
alert(`O nome do seu personagem é ${PrimeiroPersonagem} e tem o ataque de ${PoderAtaque}`)
alert('Certo! Vamos criar o vilão')

const SegundoPersonagem = prompt('Qual é o nome do seu segundo vilão')
const Vida = parseFloat(prompt('Qual é a vida do seu vilão'))
const Defesa = parseFloat(prompt('Qual é a defesa desse seu personagem!'))
const Escudo =  prompt('Seu vilão possui escudo? (Sim/Não)')

let dano = 0

if (PoderAtaque > Defesa && Escudo ==="Não"){
  dano = PoderAtaque - Defesa
} else if (PoderAtaque > Defesa && Escudo === "Sim"){
  dano = (PoderAtaque - Defesa) / 2
}
Vida -= dano


alert(PrimeiroPersonagem + "causou" + dano + "pontos de dano no" + SegundoPersonagem)
alert(
  PrimeiroPersonagem + "\nPoder de Ataque:" + PoderAtaque + "\n\n" + 
  SegundoPersonagem + "\nPontos de Vida:" + 
  "\n Poder de defesa" + Defesa + "\nPossui Escudo:" + Escudo

)