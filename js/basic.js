console.log('Olá, Javascript!')

var userName = 'Rodrigor'

document.getElementById('user-Name').innerHTML = userName

/*Variaveis

var nome = 'Mestre Yoda'
var idade = 100
var jedi = true

console.log(typeof nome)
console.log(typeof idade)
console.log(typeof jedi)
*/

/*Operadores matemáticos

var n1 = 7
var n2 = 2.5

console.log(typeof n1)
console.log(typeof n2)

var total = n1 / n2
console.log(total)
*/

/*Operadores de comparação

var v1 = 5
var v2 = '5'

var resultado = v1 != v2
console.log(resultado)
*/


/* Funçoes

function soma (n1, n2) {
    console.log(n1 + n2)
}

soma(5, 5)

function boasVindas(nome) {
    alert(nome + ', Seja bem vindo(a)')
}

boasVindas('Rodrigor')

function soma(n1, n2){
    return n1 + n2 
}

var resultado = soma(5,5)
console.log(resultado)
*/


/* Controle de fluxos

//Sendo um cliente corretista do banco 
//Posso sacar dinheiro em caixas eletronicos 
//Para poder comprar em lugares que nao aceitam o cartao de debito ou cresito

var saldo = 1000

function saque(valor){

    if (valor > saldo){
        console.log('Valor do saque superior ao saldo')
    }else if (valor > 700){
        console.log('valor do saque é suoerior ao maximo permitodo por operação')
    }else{
    saldo = saldo - valor
    }
}

saque(701)
console.log(saldo)

// Cenerio1: Saque como sucesso
// Dado que meu saldo é de 1000 reais
// Quando faço um saque de 500 reais 
// Entao o valor do saque deve ser deduzir do meu saldo

// Cenario 2: Saque com valor superior ao saldo
// Dado que me saldo é de 1000 reais
// Quando faço um saque de 1001 reais
// Entao nã deve deduzir do meu saldo 
// E deve mostrar uma mensagem de alerta informando que o valor é superior ao saldo

// Cenerio 3: Saque com valor máximo
// Dado que meu saldo é de 1000 reais
// E o valor máximo por operação é de 700
// Quando faço um saque no valor de 701 reais
// Então nao deve deduzir do meu saldo 
// E deve mostrar uma mensagem de alerta informando que o valor é superiro ao máximo permitido por operação 
*/


/*Arrays//

//var gaveteiro = ['Mais','Gravatas','Documentos','Salgadinhos']

//console.log(gaveteiro[0])

var personagens = ['Mestre Yoda','Luke Skywalker','Princesa Leia','Darth Vader']

personagens.push('C3pO')
personagens.push('R2D2')

//console.log(personagens)
//personagens.pop()

personagens = personagens.filter(function(p){
    return p !== 'Darth Vader'
})

personagens = personagens.filter(function(p){
    return p === 'Mestre Yoda'
})

console.log(personagens)
*/


//Controles de repedição (loops)//

/*var personagens = ['Mestre Yoda','Luke Skywalker','Princesa Leia','Darth Vader', 'R2D2']

//personagens.forEach(function(p){
//   console.log(p)
//})

// for (var i in personagens){
//    console.log(personagens [i])
//}

for (var i = 0; i <=10; i++){
    console.log(i)
    //codigo vai ser executado ate a condiçao retornar false
}*/

/* Objetos//

var yoda = {
    nome: 'Mestre Yoda',
    idade:100,
    jedi: true,
    MostraIdade: function() {
        //console.log(this.idade)
        console.log(`A idade do ${this.nome} é ${this.idade} anos.`)
    }
}

//yoda.nome = 'Mestre Yoda'
//yoda.idade = 100
//yoda.jedi = true
//yoda.outro_campo = 'alguma coisa'

console.log(yoda)
yoda.MostraIdade()
*/

//constamtes//

const nome = 'Darth Vadre'
console.log(nome)

nome = 'Mestre Yoda'
console.log(nome)