import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Notificacao } from '@models/notificacao.interface'

@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {
  private api = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  listar(): Observable<Notificacao[]> {
    return this.http.get<Notificacao[]>(`${this.api}/notificacoes`);
  }

  criar(id: string, conteudo: string): Observable<Notificacao> {
    return this.http.post<Notificacao>(`${this.api}/notificar`, { id, conteudo});
  }
}