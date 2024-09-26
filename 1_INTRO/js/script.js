// OPERADORES E TIPOS DE DADOS:


// FUNCTION MATH:
console.log(Math.max (5, 2, 9))
console.log(Math.floor (2.8))

// CONSOLE:
console.error("error teste");

// CONCATENAÇÃO / INTERPOLAÇÃO, TEMPLATE STRING;
/*F2
let nome = prompt("Informe seu nome:");

if(nome === "Caua") {
    console.log(`Bem vindo ${nome}`)
    console.log("Bem vindo " + nome)
}
*/

/*F2

const age = prompt("Qual é sua idade:")

if(age >= 18) {
    console.log(`Você tem ${age} anos, sendo maior de idade!`)
} else {
    alert("Você é menor de idade!")
    console.error("Você não é maior de idade!")
}*/

/*const senha = prompt("Digite sua senha:")

if(senha === "12345") {
    // VARIAVEL SÓ TERA IDENTIFICADOR NESSE BLOCO
    let nome = prompt("Digite seu nome:")
    // INTERPOLAÇÃO / TEMPLATE STRING:
    confirm(`Bem-vindo, ADM ${nome}`)
    // CONCATENAÇÃO:
    confirm("Bem-vindo, ADM " + nome)
    console.warn(`ADMIN ${nome} LOGADO COM SUCESSO!`)
} else {
    confirm("SENHA INVÁLIDA")
}
*/

// METHODS FOR OBJECT MATH:
    // MAIOR NUMERO
console.log(Math.max(1, 2, 3))
    // MENOR NUMERO
console.log(Math.min(1, 2, 3))
    // ARREDONDAMENTO PARA BAIXO
console.log(Math.floor(1.7))
    // ARREDODAMENTO PARA CIMA
console.log(Math.ceil(1.6))

// ELSE:
let a = 5

if(5>10) {
    console.log(true)
} else console.log(typeof a)

// ELSE IF:
const username = "Caua"
const userage = 18

if(username === "Caua" && userage === 15) {
    console.log("Bem-vindo Caua, menor de idade!")
} else if(username === "Pedro") {
    console.log("Bem-vindo Pedro")
} else if(username === "Caua" && userage === 18) {
    console.log("Bem-vindo Caua, maior de idade!")
    // SEGUE UMA CASCATA DE VALIDAÇÃO SENDO ESSA ULTIMA IGNORADA, POIS A CONDIÇÃO FOI SATISFEITA
} else if(username === "Caua") {
    console.log("Você é maior de idade!")
}

// ESTRUTURA DE REPETIÇÃO WHILE:
let p = 0

while(p<=10) {
    console.log(`Subindo ${p}%`)
    // INCREMENTADOR
    p = p + 1
}

// DO WHILE:
let o = 10

do {
    console.log(o)
    o--
} while(o>=0)

// FOR:

for(let b = 10; b<=20; b++) {
    console.log(b + "%")
}

// FOR BREAK
let i = 0

for(i; i<=10; i++) {
    console.log(i + " %");

    if(i === 5) {
        console.error("BREAK!")
        break;
    }
}

// FOR CONTINUE
for(let a = 0; a<=10; a = a + 1) {

    if(a % 2 === 0) {
        console.log(`${a} é um Número Par!`);
        continue;
        // PULA PARA O PRÓXIMO
    }
}
