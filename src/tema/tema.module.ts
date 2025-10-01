import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tema } from '../postagem/entities/tema.entity';
import { TemaService } from './services/tema.services';
import { TemaController } from './tema.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Tema])],
  providers: [TemaController],
  controllers: [TemaService],
  exports: [TemaService],
})
export class TemaModule {}
