const ask = require('readline-sync');

let n1 = Number(ask.question('Digite um numero 1 a 5: '))
let n2 = Number(ask.question('Digite segundo numero 1 a 5: '))
let operacoes = Number(ask.question(`Escolha: 1-Somar 2-Dividir 3-Mutiplicar 4-Diminuicao 5-Sair:`))



function somar (n1, n2) {
    return n1 + n2
}
function dividir (n1, n2) {
    return n1 / n2
}
function mutiplicar (n1, n2){
    return n1 * n2 
}
function diminuicao (n1, n2 ){
    return n1 - n2 
}
function sair (n1, n2){

}


switch (operacoes){
    case 1:
        console.log(somar(n1, n2))
        break

    case 2: 
        console.log(dividir(n1, n2))
        break 
    case 3: 
        console.log(mutiplicar(n1, n2))
        break
    case 4: 
        console.log(diminuicao(n1, n2))
        break 
    case 5: 
        console.log(sair(n1, n2))
        break 
     
    default:
        console.log('Opcao invalida')
}


