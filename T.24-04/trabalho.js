const ask = require('readline-sync')

function criarUsuario(nome, idade, cidade, hobbies){
   return [nome, idade, cidade, hobbies];
}

function formatarHobbies(hobbies){
    return hobbies.join(", ");
}



let nome = ask.question('Digite seu nome:')
let idade = Number(ask.question('digite sua idade: '))
let cidade = ask.question('Digite sua cidade: ')
let primeiroHobbie = ask.question('Digite seu primeiro Hobbie: ')
let segundoHobbie = ask.question('Digite o seu segundo Hobbie: ')

let user1 = criarUsuario(nome, idade, cidade, [primeiroHobbie, segundoHobbie])

console.clear()
console.log(user1)
let hobbiesDoUser1 = formatarHobbies(user1[3])

console.log(hobbiesDoUser1)

function gerarDescricao(usuario){
    return `${usuario[0]} tem ${usuario[1]} anos, mora em ${usuario[2]} e gosta de ${formatarHobbies(usuario[3])}`
}
console.log(gerarDescricao(user1))