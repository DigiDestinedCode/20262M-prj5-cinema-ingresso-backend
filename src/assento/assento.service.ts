import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAssentoDto } from './dto/create-assento.dto';
import { UpdateAssentoDto } from './dto/update-assento.dto';

@Injectable()
export class AssentoService {
  constructor(private readonly prisma: PrismaService) {}

  async criar(dto: CreateAssentoDto) {
    return await this.prisma.assento.create({
      data: {
        sala_id: dto.sala_id,
      },
    });
  }

  listar() {
    return this.prisma.assento.findMany({
      orderBy: { assento_id: 'asc' },
      include: { assento_reserva: true },
    });
  }

  async buscarPorId(id: number) {
    const assento = await this.prisma.assento.findUnique({
      where: { assento_id: id },
      include: { assento_reserva: true },
    });
    if (!assento) {
      throw new NotFoundException(`Assento ${id} nao encontrado`);
    }
    return assento;
  }

  async atualizar(id: number, dto: UpdateAssentoDto) {
    await this.buscarPorId(id);
    return await this.prisma.assento.update({
      where: { assento_id: id },
      data: dto,
    });
  }

  async remover(id: number) {
    await this.buscarPorId(id);
    return await this.prisma.assento.delete({
      where: { assento_id: id },
    });
  }
}