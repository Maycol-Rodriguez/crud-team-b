import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Libro } from './entities/libro.entity';
import { LibrosController } from './libros.controller';
import { LibrosService } from './libros.service';
import { AutoresModule } from 'src/autores/autores.module';

@Module({
  imports: [TypeOrmModule.forFeature([Libro]), AutoresModule],
  controllers: [LibrosController],
  providers: [LibrosService],
})
export class LibrosModule {}
