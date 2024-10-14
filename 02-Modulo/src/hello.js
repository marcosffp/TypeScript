"use strict";
//variavel nome do tipo string
let nome = "Marcos";
console.log(`Olá, ${nome}!`);
//Arrays
let animais = ["Cachorro", "Gato", "Papagaio"];
console.log(animais);
//Obejetos
let carro;
carro = {
    nome: "Fusca",
    ano: 1980,
    preco: 5000
};
console.log(carro);
//Funções
function multiplicarNumero(num1, num2) {
    return num1 * num2;
}
console.log(multiplicarNumero(2, 3));
//boolean
let isTrue = true;
console.log(isTrue);
let tarefaConcluida = true;
let tarefaNaoConcluida = false;
console.log(tarefaConcluida, tarefaNaoConcluida);
//number
let idade = 30;
console.log(idade);
//bigint
let bigint = 100n;
console.log("bigint" + bigint);
