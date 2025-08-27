import { Component, signal } from '@angular/core';
import { Notificacoes } from '@components/notificacoes/notificacoes';

@Component({
  selector: 'app-root',
  imports: [Notificacoes],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('front-app-notificacoes');
}
