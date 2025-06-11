import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // solicitações http (GET, POST, PUT, DELETE)
import { Observable } from 'rxjs';  // classe que traduz a API <=> obj
import { Vaga } from '../models/vaga.model';

@Injectable({
  providedIn: 'root',
})
export class VagaService {
  // atributos - endereço da API
  private apiUrl = 'http://localhost:3008/vagas'; // caminho para a api

  constructor(private http: HttpClient) {}
  // ao instalar o obj da classe, cria-se a conexãp com o http Client

  // métodos de Conexão
  // GET -> obtem a lista de vagas a partir da api (pegar)
  // nomeDoMétodo()
  getVagas(): Observable<Vaga[]> {  // observable é uma biblioteca da rxjs -> traduzir os dados da API <=> obj
    // oberservable é um tipo de dado que representa uma coleção de dados que podem ser observados ao longo do tempo
    return this.http.get<Vaga[]>(this.apiUrl); // retorna um Observable do tipo Vaga[]
  }

  // POST -> cadastra uma vaga na api (inserir)
  postVaga(vaga: Vaga): Observable<Vaga[]> {
    return this.http.post<Vaga[]>(this.apiUrl, vaga); // retorna um Observable do tipo Vaga[]
  }

  // PUT -> Atualizar Vaga Existente na API (modificar)
  putVaga(id: any, vaga: Vaga): Observable<Vaga[]> {
    const apiUrlFinal = `${this.apiUrl}/${id}`;  // http://localhost:3000/vagas/id
    return this.http.put<Vaga[]>(apiUrlFinal, vaga);
  }

  //DELETE -> Deleta vaga exisente na api (deletar)
  deleteVaga(id: any) : Observable<Vaga[]> {
    // const apiUrlFinal = this.apiUrl+"/"+id;
    const apiUrlFinal = `${this.apiUrl}/${id}`;  // http://localhost:3000/vagas/id
    return this.http.delete<Vaga[]>(apiUrlFinal);
  }
}
