let pessoa = {
  nome:"Isaac",
  idade: 26,
  dizerOla(){
    console.log("Ola, mundo!" + this.nome)
  }
}

console.log(pessoa)
pessoa.dizerOla()