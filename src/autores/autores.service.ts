import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAutoreDto } from './dto/create-autore.dto';
import { UpdateAutoreDto } from './dto/update-autore.dto';
import { Autore } from './entities/autore.entity';

@Injectable()
export class AutoresService {
  constructor(
    @InjectRepository(Autore)
    private dbAutor: Repository<Autore>,
  ) {}

  async create(createAutoreDto: CreateAutoreDto) {
    createAutoreDto.nombre = createAutoreDto.nombre.toUpperCase();
    createAutoreDto.nacionalidad = createAutoreDto.nacionalidad.toUpperCase();

    try {
      const autor = this.dbAutor.create(createAutoreDto);
      await this.dbAutor.save(autor);
      return autor;
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    try {
      return await this.dbAutor.find();
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: string) {
    let autor: Autore;
    try {
      if (isNaN(+id)) {
        autor = await this.dbAutor.findOneBy({ nombre: id });
      } else {
        autor = await this.dbAutor.findOneBy({ id: +id });
      }

      if (!autor) {
        throw new NotFoundException(
          `no existe un autor con el id ${id} en la base de datos`,
        );
      }

      return autor;
    } catch (error) {
      throw error;
    }
  }

  async update(id: number, updateAutoreDto: UpdateAutoreDto) {
    updateAutoreDto.nombre = updateAutoreDto.nombre?.toUpperCase();
    updateAutoreDto.nacionalidad = updateAutoreDto.nacionalidad?.toUpperCase();
    updateAutoreDto.fecha_nacimiento =
      updateAutoreDto.fecha_nacimiento?.toUpperCase();

    try {
      const autor = await this.dbAutor.preload({
        id: id,
        ...updateAutoreDto,
      });
      await this.dbAutor.save(autor);
      return autor;
    } catch (error) {
      throw error;
    }
  }

  async remove(id: string) {
    try {
      const autor = await this.findOne(id);
      await this.dbAutor.remove(autor);
      return {
        message: `autor con el id ${id} fue eliminado`,
      };
    } catch (error) {
      throw error;
    }
  }
}
