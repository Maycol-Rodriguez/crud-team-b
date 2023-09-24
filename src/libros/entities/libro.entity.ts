import { Autore } from 'src/autores/entities/autore.entity';
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Libro {
  @PrimaryGeneratedColumn('increment')
  libro_id: number;

  @Column({ type: 'varchar' })
  titulo: string;

  @Column({ type: 'varchar' })
  fecha_publicacion: string;

  @ManyToOne(() => Autore, (autor) => autor.libro, { onDelete: 'CASCADE' })
  autor: Autore;
}
