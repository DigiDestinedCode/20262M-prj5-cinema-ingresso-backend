import { Module } from '@nestjs/common';
import { AssentoReservaService } from './assento_reserva.service.js';
import { AssentoReservaController } from './assento_reserva.controller.js';

@Module({
  providers: [AssentoReservaService],
  controllers: [AssentoReservaController]
})
export class AssentoReservaModule {}
