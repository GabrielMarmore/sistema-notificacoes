import {
  Body,
  Controller,
  HttpCode,
  Post,
} from "@nestjs/common";
import { NotificacaoService } from './notificacao.service';
import { CriarNotificacaoDto } from './dto/criar-notificacao.dto';

@Controller('api')
export class NotificacaoController {
  constructor(private readonly notificacaoService: NotificacaoService) {}

  @Post('notificar')
  @HttpCode(202)
  async notificar(@Body() body: CriarNotificacaoDto) {
    const result = await this.notificacaoService.criarNotificacao(body);
    return result;
  }
}
