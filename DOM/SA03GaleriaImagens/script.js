// Galeria de Imagens Dinâmicas -> DOM

// elementos com DOM
let inputUpload = document.getElementById("upload");
let btnAddImagem = document.getElementById("addImagem");
let divGaleria = document.getElementById("galeria");
let divCarrossel = document.getElementById("carrossel");

// vetor para receber as imagens
let imagensURL = [];

// ouvinte para o btnAddImagem
btnAddImagem.addEventListener("click", () => {
    let imagemURL = inputUpload.value.trim
    if(imagemURL ==="") return;
    imagensURL.push(imagemURL)
    atualizarGaleria();  // função para atualizar as imagens da galeria
    atualizarCarrossel();  // função apara atualizar as imagens do carrossel
    inputUpload.value = "";
});

// atualizarGaleria
function atualizarGaleria(){
    divGaleria.innerHTML = "";
    imagensURL.forEach((imagem,index)=>{
        // criar card para colocar as imagens
        const divCard = document.createElement("div");
        divCard.classList.add("card");  // adicionanado a classe card ao div
        //criar Imagem para receber a URL
        const imgCard = document.createElement("img");
        imgCard.src = imagem;
        // criar um botton -> remover imagem
        const btnRemove = document.createElement("button")
        btnRemove.innerText = "X";
        btnRemove.classList.add("remove");
        btnRemove.addEventListener("click", () => {  // remover a imagem da galeria
            imagensURL.splice(index, 1);  // remover a imagem pelo index do vetor
            atualizarGaleria();  // recursão
            atualizarCarrossel();
        });
        divCard.appendChild(imgCard);
        divCard.appendChild(btnRemove);
        divGaleria.appendChild(divCard);
    });
}

// função atualizar carrossel
function atualizarCarrossel(){
    divCarrossel.innerHTML = "";  // limpa o carrossel

    imagensURL.forEach(imagem => {
        let img = document.createElement("img");  // criando uma tag<html> img
        img.src = imagem;  // atribuindo o endereço da imagem -(net)/local
        img.style.width = "100%";  // garante o ajuste de 100% da imagem
        divCarrossel.appendChild(img);  // adicionando a img dentro da div (img -> div)
    });

    // ajuste do carrossel -> movimentação
    divCarrossel.style.width = `${imagensURL.length*100}%`  // ajusta a largura do carrossel
    // inicia o carrossel
    iniciarCarrossel();
}
//função para iniciar o carrossel
function iniciarCarrossel() {
    let index = 0;

    setInterval(()=>{
        index = (index+1)%imagensURL.length;
        divCarrossel.style.transition = `transform ${(1+imagensURL.length)/imagensURL}s ease-in-out`;  // troca as imagens
        divCarrossel.style.transform = `translateX(-${index*(100/imagensURL.length)}%)`  // move corretamente
    },2000);
}

