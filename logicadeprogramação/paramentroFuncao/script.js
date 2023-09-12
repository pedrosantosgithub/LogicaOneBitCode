function dobro(x){
  alert(`O dobro de ${x} é ${x * 2}`)
}
//dobro(5)
//dobro(7)

//dobro()
function dizerOla(nome = "mundo"){
  alert(`Olá ${nome}`)
}
//dizerOla("Isaac")
//dizerOla()

function soma(a, b){
  alert(`O resultado da soma é ${a + b}`)
}
//soma(7,6)
//soma(1,1)

function criarUsuario(nome, email, senha, tipo = "admin") {
  const usuario = {
    nome, //mesmo que nome: nome
    email,
    senha,
    senha,
    tipo
  }
  console.log(usuario)
}




function novoUsuario(nome, email, senha, tipo = "admin"){
  const usuario = {
    nome, //mesmo que nome: nome
    email,
    senha,
    senha,
    tipo
}}
//tipo = "admin" Quando tiver um padrão jogar pro final


criarUsuario("Isaac", "isaac@gmail.com", "Isaac123")
novoUsuario("Isaac", "isaac@gmail.com", "Isaac123")


function muitosParametros(nome, telefone, endereco, aniversario, email, senha){
  //..
}
function objetoComParametros(usuario){
  //..
  usuario.email
  usuario.nome
}
muitosParametros(nome, telefone, endereco, aniversario, email, senha)

const dadosDoUsuario = {
  nome: "",
  telefone: "",
  email: "",
  senha: "",
  endereco: "",
  aniversario: ""
}
objetoComParametros(dadosDoUsuario)
