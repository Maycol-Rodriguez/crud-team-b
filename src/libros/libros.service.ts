import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AutoresService } from 'src/autores/autores.service';
import { Repository } from 'typeorm';
import { CreateLibroDto } from './dto/create-libro.dto';
import { UpdateLibroDto } from './dto/update-libro.dto';
import { Libro } from './entities/libro.entity';

@Injectable()
export class LibrosService {
  constructor(
    @InjectRepository(Libro)
    private dbLibro: Repository<Libro>,

    private dbAutor: AutoresService,
  ) {}

  async create(idAutor: string, createLibroDto: CreateLibroDto) {
    try {
      const autor = await this.dbAutor.findOne(idAutor);
      const libro = this.dbLibro.create(createLibroDto);
      libro.autor = autor;
      return await this.dbLibro.save(libro);
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    try {
      return await this.dbLibro.find({ relations: ['autor'] });
    } catch (error) {
      throw error;
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} libro`;
  }

  update(id: number, updateLibroDto: UpdateLibroDto) {
    return `This action updates a #${id} libro`;
  }

  remove(id: number) {
    return `This action removes a #${id} libro`;
  }
}
