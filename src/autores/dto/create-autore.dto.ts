import { IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateAutoreDto {
  @IsString({ message: 'el campo nombre debe ser string' })
  @MinLength(3)
  @MaxLength(20)
  nombre: string;

  @IsString()
  @MinLength(3)
  @MaxLength(20)
  fecha_nacimiento: string;

  @IsString()
  @MinLength(3)
  @MaxLength(20)
  nacionalidad: string;
}
