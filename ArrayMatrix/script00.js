// array and matrix (vetores e matrizes) 
// declarar a array => []
let array = [];
let numberArray = [1,2,3,4,5,6,7,8,9];
let textArray = ["Sapato", "Bola", "Caixa"];
let mixArray = [ 1, "Nome", true];

// Como Faço Para Acessar os Elementos (indice)
console.log(textArray[1]); //bola
console.log(numberArray[8]);  //9

// Contar Elementos de um Array (length) 
console.log(numberArray.length);  //9
console.log(textArray.length);  //3

// Adicionar elementos em um Array  
//no começo (0) unshift
textArray.unshift("Cachorro");
console.log(textArray);
//no final - push()
textArray.push("Casa")
console.log(textArray)

//Alterar o valor de elemento Array
textArray[2] = "Carro";
console.log(textArray);

// remover elementos Array
// do começo - shift
textArray.shift();
console.log(textArray);  //cachorro

//do meio - splice(indice, quantidade)
textArray.splice(1,1);  //carro
console.log(textArray);

//do fim
textArray.pop();  //casa
console.log(textArray);

// Percorrer um Array
for(let i=0; i<numberArray.length; i++) {
    console.log("Numero["+i+"]"+numberArray[i]);
}

//forEach
numberArray.forEach(element => {
    console.log(element)
});

//indexOf=>Retorna o Índice do Elemento 
console.log(mixArray.indexOf("Nome"));
console.log(numberArray.indexOf(10));