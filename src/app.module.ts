import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutoresModule } from './autores/autores.module';
import { LibrosModule } from './libros/libros.module';

@Module({
  imports: [
    AutoresModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      port: 3306,
      username: 'prueba',
      password: '123456',
      database: 'prueba',
      host: 'localhost',
      autoLoadEntities: true,
      synchronize: true,
    }),
    LibrosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
