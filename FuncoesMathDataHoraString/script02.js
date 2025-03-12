// Funções de Texto (String) string = (variavel tipo texto)

let texto = "Aula de JavaScript";

// contar os caracteres (length)
console.log(texto.length);  //18

// MAIÚSCOLAS e minúsculas
console.log(texto.toUpperCase());  //MAIÚSCULA
console.log(texto.toLowerCase());  //minúscula

// Partes do Texto
//substring (início, fim)
console.log(texto.substring(0,4));  // Aula
//slice(Quantidade)
console.log(texto.slice(-10));  // JavaScript

// Substituir parte do Texto
console.log(texto.replace("Java", "Type"));

//Tesoura (Trim) - Somente começo e fim
let texto1 = "  JavaScriprit  ";
console.log(texto1);  //"  JavaScript  "
console.log(texto1.trim());

//Separar Texto (split) - caracter comum
let linguagens = "JavaScript, Python, PHP, Java, C#"
let vetorlinguagens = linguagens.split(", ");
console.log(linguagens);
console.log(vetorlinguagens);

// desafio
let caracter = "Bom Dia Com Muita Alegria";
let caracterSemEspaco = caracter.replaceAll(" ", "");
console.log(caracter);
console.log(caracter.length);
console.log(caracterSemEspaco);
console.log(caracterSemEspaco.length);