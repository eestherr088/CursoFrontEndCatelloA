// Introdução ao Estudo de DOM

// Selecionar e Modificar Elementos 

// getElementById -> variável simples
let titulo = document.getElementById("titulo");  // pegar o elemento
console.log(titulo);  // ver o elemento
titulo.innerText = "Outro Título";  // modificar o texto

// get ElementsByClassName -> Vetor(array)
let descricao = document.getElementsByClassName("descricao");
console.log(descricao[0]);
descricao[1].innerText = "Outro Texto";
descricao[0].style.color = "red";

// get ElementsByTagName -> Vetor(array)
let p = document.getElementsByTagName("p");
console.log(p[1]);
p[1].style.fontWeight = "bold";

// query selector -> variável simples
let paragrafo = document.querySelector("p");
console.log(paragrafo);
paragrafo.style.fontSize = "40px";

// querySelectorAll -> Vetor(array)
let descricaoAll = document.querySelectorAll(".descricao");
descricaoAll.forEach(element => element.style.color="green");

// Lançamento de Eventos (EventListener)
// chamando o botão
function mudarCorFundo(){
    let body = document.querySelector("body")
    body.style.backgroundColor = "blue";
}

// 2 - adicionando o ouvinte(addEventListener)
document.querySelector(".btn").addEventListener(
    "click",outraCorFundo
);

function outraCorFundo(){
    document.body.style.backgroundColor = "orange";
}