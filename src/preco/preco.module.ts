import { Module } from '@nestjs/common';
import { PrecoService } from './preco.service.js';
import { PrecoController } from './preco.controller.js';

@Module({
  providers: [PrecoService],
  controllers: [PrecoController]
})
export class PrecoModule {}
