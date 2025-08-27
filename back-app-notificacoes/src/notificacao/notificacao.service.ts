import { Injectable } from '@nestjs/common';
import { CriarNotificacaoDto } from './dto/criar-notificacao.dto';
import { StatusService } from './status.service';
import { ConfigService } from "@nestjs/config";
import { RabbitService } from "./rabbit.service";

@Injectable()
export class NotificacaoService {
  constructor(
    private readonly statusService: StatusService,
    private readonly rabbitService: RabbitService,
    private readonly configService: ConfigService
  ) {}
    async pegarStatus(id: string) {
      return this.statusService.pegarStatus(id)
    }
  async criarNotificacao(body: CriarNotificacaoDto) {
    this.statusService.setarStatus(body.id, "ACEITO");

    const queueIn = this.configService.get<string>("QUEUE_NOTIFICATION_IN") ?? "fila.notificacao.entrada.GABRIELMARMORE";
    await this.rabbitService.publish(queueIn, body);
    
    return {
      id: body.id,
      conteudo: body.conteudo,
      status: "ACEITO",
    };
  }
}
