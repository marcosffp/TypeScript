
//variavel nome do tipo string
let nome: string = "Marcos";
console.log(`Olá, ${nome}!`);

//Arrays
let animais: string[] = ["Cachorro", "Gato", "Papagaio"];
console.log(animais);

//Obejetos
let carro:{
  nome: string,
  ano: number,
  preco: number
};

carro = {
  nome: "Fusca",
  ano: 1980,
  preco: 5000
}
console.log(carro);


//Funções
function multiplicarNumero(num1: number, num2: number): number{
  return num1 * num2;
}
console.log(multiplicarNumero(2, 3));

//boolean
let isTrue: boolean = true;
console.log(isTrue);

let tarefaConcluida: boolean = true;
let tarefaNaoConcluida: boolean = false;
console.log(tarefaConcluida, tarefaNaoConcluida);

//number
let idade: number = 30;
console.log(idade);

//bigint
let bigint: bigint = 100n;
console.log("bigint "+bigint);

//string
let nome2: string = "Marcos";
console.log(nome2);

let nomeCompleto: string = 'Marcos Alberto';
console.log(nomeCompleto);

let nome3:string = "Marcos";
let dadosFuncionario: string = `Nome: ${nome3}, Idade: 30, Cargo: Desenvolvedor`;
console.log(dadosFuncionario);

//Arrays
let animais2: string[] = ["Cachorro", "Gato", "Papagaio"];
let fruta1: Array<string> = ["Maçã", "Banana", "Pera"];

animais2.push("Peixe");
fruta1.push("Laranja");
console.log(animais2.length);
console.log(fruta1.length);

let numeros=[1,2,3,4,5];
numeros=[...numeros, 6, 7, 8];

let linguagens: string[]=new Array("JavaScript", "Python", "Java");

function linguagem(linguagens:string[]) {
  for(let i=0; i<linguagens.length; i++){
    console.log(linguagens[i]);
  }
}

//Tuplas
let pessoa: [string, number, boolean] = ["Marcos", 30, true];



