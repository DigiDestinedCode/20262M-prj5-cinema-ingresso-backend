import { Module } from '@nestjs/common';
import { AssentoService } from './assento.service';
import { AssentoController } from './assento.controller';

@Module({
  controllers: [AssentoController],
  providers: [AssentoService],
  exports: [AssentoService],
})
export class AssentoModule {}