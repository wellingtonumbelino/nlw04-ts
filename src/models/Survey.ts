import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("surveys")
class Survey {
  @PrimaryColumn() //chave primária do banco
  readonly id: string;

  @Column() //coluna da base
  title: string;

  @Column() //coluna da base
  description: string;

  @CreateDateColumn() //tipo data
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Survey };