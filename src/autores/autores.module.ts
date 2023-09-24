import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutoresController } from './autores.controller';
import { AutoresService } from './autores.service';
import { Autore } from './entities/autore.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Autore])],
  controllers: [AutoresController],
  providers: [AutoresService],
  exports: [AutoresService],
})
export class AutoresModule {}
