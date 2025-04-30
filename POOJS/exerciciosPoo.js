// exercicio 1
class produto {
    constructor(nome, preco, estoque) {
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }
    // métodos para manipular o estoque
    vender (quantidade) {
        if (this.estoque<quantidade) {
            console.log("Estoque insuficiente!");
            return;
        } 
        return this.estoque -= quantidade;
        }
        repor (quanidade) {
            return this.estoque += quantidade;
        }
        // método exibir info
        exibirInfo(){
            console.log(`Produto: ${this.nome}, Preco: ${this.preco}, Estoque: ${this.estoque}`);
        }
    }

let produto1 = new Produto("Arroz", 30, 100);
produto1.exibirInfo();
produto1.vender(110);
produto1.repor(20);
produto1.vender(110);
produto1.exibirInfo();