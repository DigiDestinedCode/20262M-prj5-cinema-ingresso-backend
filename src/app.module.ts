import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { validateEnv } from './config/env.validation';
import { PrismaModule } from './prisma/prisma.module.js';
import { HealthModule } from './health/health.module.js';
import { AssentoModule } from './assento/assento.module.js';
import { AssentoReservaModule } from './assento_reserva/assento_reserva.module.js';
import { PrecoModule } from './preco/preco.module.js';
import { ReservaModule } from './reserva/reserva.module.js';
import { TicketModule } from './ticket/ticket.module.js';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      validate: validateEnv,
    }),
    PrismaModule,
    HealthModule,
    AssentoModule,
    AssentoReservaModule,
    PrecoModule,
    ReservaModule,
    TicketModule,
  ],
})
export class AppModule {}