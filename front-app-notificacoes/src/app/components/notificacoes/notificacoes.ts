import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Notificacao } from '@models/notificacao.interface';
import { NotificacaoService } from '@services/notificacao.service';

@Component({
  selector: 'app-notificacoes',
  imports: [CommonModule],
  templateUrl: './notificacoes.html',
  styleUrl: './notificacoes.css'
})
export class Notificacoes {
  constructor(private notificacaoService: NotificacaoService) {}

  erro: string = '';
  notificacoes: Notificacao[] = [];

  criarNotificacao(notificacao: string) {
    this.erro = '';
    let uiid = crypto.randomUUID();

    this.notificacoes.push({
      id: uiid,
      conteudo: notificacao,
      status: 'AGUARDANDO PROCESSAMENTO'
    });

    this.notificacaoService.criar(uiid, notificacao).subscribe({
      next: (data) => {
        //this.notificacoes.push(data); //vamos pegar pelo polling
      },
      error: (err) => {
        console.error(err); // dev
        this.erro = err.error?.message?.[0] || 'Erro ao enviar notificação';
      }
    });
  }
}
