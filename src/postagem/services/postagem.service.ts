import { Injectable } from '@nestjs/common';
import{ InjectableRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';
import { Postagem } from '../entities/postagem.entity';

@Injectable()
export class PostagemService {
    constructor(
        @InjectableRepository(Postagem)
        private postagemRepository: Repository<Postagem>
    ) { }

    async findAll(): Promise<Postagem[]> {
        return await this.postagemRepository.find();
    }
}
