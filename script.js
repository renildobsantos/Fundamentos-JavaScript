console.error ("Este é um erro")
console.warn ("Este é um aviso")
console.log ("Este é uma mensagem")

// variáveis

var x = 10

// maneiras mais modernas

let y = 20
const z = 30

console.log(x)
console.log(y)
console.log(z)

const name = 'carlos'
console.log(name)
console.log(typeof name)

let qtboll = 5
console.log(qtboll)
console.log(typeof qtboll)

const names = ['carlos', 'joão', 'maria']
console.log(names)
console.log(names.length)
console.log(typeof names)
console.log(names[1])
console.log(names.slice(2))

names[3] = 'fabio'
console.log(names)

//////////////////////////////////////////////

const dados = {
    nome:"joão",
    profissao: "médico",
    idade: 40,
}

console.log(dados)
console.log(dados.idade)
console.log(dados['idade'])

// converter obj para json

const json = JSON.stringify(dados)
console.log(json) 

// reverter json para obj

const obj = JSON.parse(json)
console.log(obj)

// Estruturas condicionada

const a = 10

if(a > 8) {
    console.log('a é maior que 8')
} else {
    console.log('número menor')
}

// if ternário

const someNumber = 4

let testNumber = someNumber < 12 ? 'yes' : 'no'
console.log(testNumber)

// ESTRUTURAS DE REPETIÇÃO (LOOP)

const myList = [1, 2, 3, 4, 5]
let counter = 0

while (counter < myList.length) {
    console.log('imprimindo: ' + myList[counter])
    counter++
}

const mySecondlist = ['a', 'b', 'c', 'd', 'e']

for (let counter = 0; counter < mySecondlist.length; counter++) {
    console.log(`Imprimindo: ${mySecondlist[counter]}`)
}

// MÉTODOS ARRAY -> REPETIÇÃO

const namesLista = ['josé', 'junior', 'fabio', 'luis']

namesLista.forEach(function(aluno) {
    console.log('O nome é: ' + namesLista)
})

const bigNumbers = [1, 2, 3, 4, 5, 6, 8, 10, 20, 50].filter(function (number) {
    return number >= 7
})
console.log(bigNumbers)

const sumAll = [1, 2, 3, 4, 5, 6, 8, 10, 20, 50].reduce(function(total, number){
    return total + number
})
console.log(sumAll)


// FUNÇÕES

function minhaFuncao(){
    console.log('OLÁ MUNDO!')
}
minhaFuncao()

function nomeCompleto(nome, sobrenome) {
    return 'O nome é: ${nome} ${sobrenome}'
}

const meuNomeCompleto = nomeCompleto('marcos', 'antônio')
console.log(meuNomeCompleto)


// ARROW FUNCTION

const myArrowFunction = (a, b) => {
    return a + b
}
console.log(myArrowFunction(2, 8))

// OU SIMPLIFICADO

const mySimpleArrowFunction = (a , b) => a + b
console.log(mySimpleArrowFunction(10, 20))

// CLASSE...

class Caneta {
    constructor(cor, preco) {
        this.cor = cor
        this.preco = preco
    }
}

const canetaA = new Caneta('azul', '2.99')
console.log(canetaA.cor, canetaA.preco)
const canetaB = new Caneta('vermelha', '3.99')
console.log(canetaB.cor, canetaB.preco)
