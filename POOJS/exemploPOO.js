// estudos de POO em JavaScript

// diferença entre procedural e POO

// declaração de uma variavel em Procendural
let produto1 = {
    nome: "Notebook",
    preco: 3000,
    marca: "Dell",
    desconto: function() {
        return this.preco * 0.1;  // 10% de desconto
    }
}  // coleção

let produo2 = {
    nome: "celular",
    preco: 1500,
    marca: "Motorola",
    desconto: function() {
        return this.preco * 0.1;
    }
}

// usando classe para criar produtos (POO)
class Produto {
    //atribuos
    // não precisei declarar, pois JS cria automaticamente a partir do construtor
    // construtor
    constructor(nome, preco, marca){
        this.nome = nome;
        this.preco = preco;
        this.marca = marca;
    }

    desconto() {
        return this.preco * 0.1;  // 10% de desconto
    }
}

let p1 = new Produto("Impressora", 500, "Epson");
let p2 = new Produto("Tablet", 200, "Samsung");

console.log(`Produto: ${produto1.nome}, Preço: ${produto1.preco}, Marca: ${produto1.marca}, Desconto: ${produto1.desconto()}`);
console.log(`Produto: ${p1.nome}, Preço: ${p1.preco}, Marca: ${p1.marca}, Desconto: ${p1.desconto()}`);

// estudo avançado de POO em JavaScript

// criação de uma classe
class Pessoa {
    // atributos (encapsulamento)
    #nome;  // atributo privado
    #idade; // atributo privado
    #cpf;  // atributo privado = (não tenho acesso direto a esse valor)

    //constructor
    constructor(nome, idade, cpf) {
        this.#nome = nome;  // this = dessa classe
        this.#idade = idade;
        this.#cpf = cpf;
    }
    // métodos públicos
    // getters and setters (encapsulamento)
    get getNome() {
        return this.#nome;
    }
    get getIdade() {
        return this.#idade;
    }
    set setIdade(idade) {
        this.#idade = idade;
    }
    get getCpf() {
        return this.#cpf;
    }
    // método de acesso
    exibirInfo() {
        console.log(`Nome: ${this.#nome}\nIdade: ${this.#idade} \nCPF: ${this.#cpf}`);
    }
}

// instanciar os objetos da classe
let pessoa1 = new Pessoa("João", 25, "123.456.789-00");
let pessoa2 = new Pessoa("Maria", 30, "987.654.321-00");
pessoa1.exibirInfo();
pessoa2.exibirInfo();
//alterar a idade da pessoa
pessoa1.setIdade = 26;
pessoa1.exibirInfo();

// herança em POO (extends)

class Funcionario extends Pessoa {
    // atributos 
    #cargo;
    #salario;
    // construtor
    constructor(nome, idade, cpf, cargo, salario) {
        super(nome, idade, cpf);  // chama da classe superClasse
        this.#cargo = cargo;
        this.#salario = salario;
    }
    // métodos públicos
    //getters and setters
    get getCargo() {
        return this.#cargo;
    }
    get getSalario() {
        return this.#salario;
    }
    set setSalario(salario) {
        this.#salario = salario;
    }
    set setCargo(cargo) {
        this.#cargo = cargo;
    }
    // método de acesso
    exibirInfo(){
        super.exibirInfo();
        console.log(`Cargo: ${this.#cargo}\nSalário: ${this.#salario}`);
    }
}
// instanciar os objetos da Classe Funcionário
let funcionario1 = new Funcionario("Pedro", 27, "321.654.987-00", "Motorista", 3000);
funcionario1.exibirInfo();
funcionario1.setSalario = 3500;
funcionario1.exibirInfo();