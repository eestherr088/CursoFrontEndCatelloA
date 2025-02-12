// delcaração de variáveis e constantes

let nome = "João";  //String
nome = "José";  //Reatribuição de valor let
// let nome = "Pedro"; erro - não pode redeclarar

var idade = 25  //Numeric
idade = 26;  // reatribuição em var
var idade = 30;  // redeclarar - ok

const PI = 3.1415;  //Numeric
// PI = 3.1954;  //erro - não pode reatribuir

let test = true;  //Boolean
var x = null;  //Null
var y;  //Undefined

console.log("Nome: "+nome);
console.log("Idade: "+idade);
console.log("PI: "+PI);
console.log("Teste: "+test);
console.log("Undefined: "+y);
console.log("Null: "+x);

// ================================================================
// Tipos de operadores

// Operadores Aritméticos (+ , - , * , / , %)
var a = 10;
var b = 3;
console.log("Soma: "+(a+b));  //13
console.log("Subtração: "+(a-b));  //7
console.log("Multiplicação: "+(a*b));  //30
console.log("Divisão: "+(a/b));  //3.333
console.log("Resto: "+(a%b));  //1

// Operadores Relacionais (>, >=, <, <=, ==, ===)

var a = 10;  // var numeric
var b = 20;  // numeric
var c = "10";  // string

console.log("a>b: "+(a>b));  // comparação maior
console.log("a==c: "+(a==c));  // igualdade simples
console.log("a===c: "+(a===c));  // igualdade estrita

//Operadores Lógicos (&& - E, || - OU, ! - Não)

var nota1 = 5;
var nota2 = 8;

console.log("Aprovação: "+(nota1>7 && nota2>7));  //false
console.log("Aprovação: "+(nota1>7 || nota2>7));  //true
console.log(!true);  //false