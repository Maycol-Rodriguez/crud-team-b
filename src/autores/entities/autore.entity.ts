import { Libro } from 'src/libros/entities/libro.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('autor')
export class Autore {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar' })
  nombre: string;

  @Column({ type: 'varchar' })
  fecha_nacimiento: string;

  @Column({ type: 'varchar' })
  nacionalidad: string;

  @OneToMany(() => Libro, (libro) => libro.autor)
  libro: Libro[];
}
