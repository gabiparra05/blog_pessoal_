import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PostagemController } from "./controllers/postagem.controller";
import { Postagem } from "./entities/postagem.entity";
import{ PostagemService} from "./services/postagem.service";

@module({
imports: [TypeOrmModule.forFeature([Postagem])],
providers: [],
controllers: [],
exports:[],
})
export class PostagemModule {}