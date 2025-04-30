// criar uma classe representando um veículo
class veiculo {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    exibirInfo() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`);
    }
}

// crie uma subcalsse Carro, que herda de veiculo e adiciona:
class carro extends veiculo {
    constructor(marca, modelo, ano, portas) {
        super(marca, modelo, ano);
        this.portas = portas;
    }
    exibirInfo() {
        super.exibirInfo();
        console.log(`Portas: ${this.portas}`);
    }
}

let carro1 = new carro("Fiat", "Uno", 1994, 2);
carro1.exibirInfo();