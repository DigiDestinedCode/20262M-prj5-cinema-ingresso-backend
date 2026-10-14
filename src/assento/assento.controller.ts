import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { AssentoService } from './assento.service';
import { CreateAssentoDto } from './dto/create-assento.dto';
import { UpdateAssentoDto } from './dto/update-assento.dto';

@Controller('assento')
export class AssentoController {
  constructor(private readonly assentoService: AssentoService) {}

  @Get()
  listar() {
    return this.assentoService.listar();
  }

  @Get(':id')
  buscar(@Param('id', ParseIntPipe) id: number) {
    return this.assentoService.buscarPorId(id);
  }

  @Post()
  criar(@Body() dto: CreateAssentoDto) {
    return this.assentoService.criar(dto);
  }

  @Put(':id')
  atualizar(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateAssentoDto,
  ) {
    return this.assentoService.atualizar(id, dto);
  }

  @Delete(':id')
  remover(@Param('id', ParseIntPipe) id: number) {
    return this.assentoService.remover(id);
  }
}