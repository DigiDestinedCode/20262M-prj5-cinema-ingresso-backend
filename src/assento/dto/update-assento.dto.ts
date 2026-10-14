import { CreateAssentoDto } from './create-assento.dto';
import { IsInt, IsOptional } from 'class-validator';

export class UpdateAssentoDto implements Partial<CreateAssentoDto> {
  @IsOptional()
  @IsInt({ message: 'sala_id deve ser um numero inteiro' })
  sala_id?: number;
}