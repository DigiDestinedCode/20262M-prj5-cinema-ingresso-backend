import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateAssentoDto {
  @IsInt({ message: 'sala_id deve ser um numero inteiro' })
  @IsNotEmpty({ message: 'sala_id e obrigatorio' })
  sala_id!: number;
}