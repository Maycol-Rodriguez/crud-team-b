import { IsString, MinLength } from 'class-validator';

export class CreateLibroDto {
  @IsString()
  @MinLength(3)
  titulo: string;

  @IsString()
  @MinLength(3)
  fecha_publicacion: string;
}
