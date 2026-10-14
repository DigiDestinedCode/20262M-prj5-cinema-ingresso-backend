import { Module } from '@nestjs/common';
import { ReservaService } from './reserva.service.js';
import { ReservaController } from './reserva.controller.js';

@Module({
  providers: [ReservaService],
  controllers: [ReservaController]
})
export class ReservaModule {}
