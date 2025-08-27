import { IsUUID, IsString, IsNotEmpty } from 'class-validator';

export class CriarNotificacaoDto {
  @IsUUID()
  id: string;

  @IsString()
  @IsNotEmpty({ message: 'Conteudo da notificação não pode ser vazia' })
  conteudo: string;
}
