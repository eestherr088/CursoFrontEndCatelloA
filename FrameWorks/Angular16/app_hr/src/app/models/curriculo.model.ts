export class Curriculo {
  // método abreviado de craição de uma classe

  // atributos
 constructor (
    private id: number,
    private nome: string,
    private foto: string,
    private descricao: string,
    private habilidades: string,
    private experiencia: string
 ) {}
}

// métodos publicos (get set)
// método(função) do tipo público (get), vai retornar o id do curriculo
public get id(): number {
  return this.id;
}

// nome do método(parâmetro)
public set id(value: number) {
  this.id = value;
}

public get nome(): string {
  return this.nome;
}

public set nome(value: string) {
  return this.nome = __values;
}

public get foto(): string {
  return this.foto;
}
