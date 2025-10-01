import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { Postagem } from './postagem/entities/postagem.entity';
import { Tema } from './postagem/entities/tema.entity';
import { PostagemModule } from './postagem/postagem.modules';
import { Usuario } from './tema/entities/usuario.entity';
import { TemaModule } from './tema/tema.module';
import { UsaurioModule } from './usuario/usuario.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_blogpessoal',
      entities: [Postagem, Tema, Usuario],
      synchronize: true,
    }),
    PostagemModule,
    TemaModule,
    AuthModule,
    UsaurioModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
