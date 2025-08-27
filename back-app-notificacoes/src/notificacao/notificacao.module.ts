import { Module } from '@nestjs/common';
import { NotificacaoController } from './notificacao.controller';
import { NotificacaoService } from './notificacao.service';
import { StatusService } from './status.service';
import { RabbitService } from './rabbit.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  controllers: [NotificacaoController],
  providers: [NotificacaoService, StatusService, RabbitService],
  exports: [RabbitService, StatusService]
})
export class NotificacaoModule {}
