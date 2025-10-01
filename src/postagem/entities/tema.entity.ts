import { IsNotEmpty } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Postagem } from './postagem.entity';

@Entity({ name: 'tb_tema' })
export class Tema {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  descricao: string;
  @ManyToOne(() => Postagem, (postagem) => postagem.tema, {
    onDelete: 'CASCADE',
  })
  tema: Postagem[];
  postagem: any;
}
