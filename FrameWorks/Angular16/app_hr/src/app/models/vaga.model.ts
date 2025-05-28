// onde começar escrever um projeto? sempre pelo model. Model é a base de tudo. Model é a estrutura de dados que vamos trabalhar.
// método classico de criação de uma classe

export class Vaga {
  // atributos
  //private id:number = 0;
  //private nome:string;
  //private foto:string;
  //private descricao:string;
  //private salario:number;

  //constructor(id:number, nome:string, foto:string, descricao:string, salario:number) {
    //this.id,
    //this.nome = nome;
    //this.foto = foto;
    //this.descricao = descricao;
    //this.salario = salario;
  //}


  // método abreviado de criação de uma classe
  constructor(
    private id:number,
    private nome:string,
    private foto:string,
    private descricao:string,
    private salario:number
  ) {}

  // métodos públicos(getters e setters)
  getId(): number {
    return this.id;
  }

// setId (nunca se altera, nao é necessario criar)

getNome(): string{
  return this.nome;
}
setNome(nome:string): void {  // não tem return, por isso void
  this.nome = nome;
}

getFoto(): string {
  return this.foto;
}

setFoto(foto:string): void {
  this.foto = foto;
}

getDescricao(): string {
  return this.descricao;
}

setDescricao(descricao:string): void{
  this.descricao = descricao;
}

getSalario(): number {
  return this.salario;
}

setSalario(salario:number): void {
  this.salario = salario;
}

// conversão BD <=> obj
toMap():{[key:string]: any} {  // obj -> bd
  return {
    id: this.id,
    nome: this.nome,
    foto: this.foto,
    descricao: this.descricao,
    salario: this.salario
  }
}
// fromMap: BD => obj
static fromMap(map:any): Vaga {
  return new Vaga(
    map.id,
    map.nome,
    map.foto,
    map.descricao,
    map.salario
  );
}

}
