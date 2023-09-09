let pessoa = {nome: 'Marcelo', sexo:'Masculino', idade: 27, peso:93.2,
engordar(peso = 0){
    this.peso += peso
}}
console.log(typeof pessoa)

console.log(pessoa.nome)
console.log('Peso anterior: ' + pessoa.peso)
pessoa.engordar(2.3)
console.log('Peso após engordar: ' + pessoa.peso)